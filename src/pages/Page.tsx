import React, { FunctionComponent, useContext, useRef, useEffect } from "react";
import { graphql } from "gatsby";
import { v4 as uuid } from "uuid";

import { Single } from "../components/Single";
import { Context } from "@/context";

interface Props {
	data: {
		config: { siteMetadata: Config };

		page: {
			fields: {
				id: PageId;
			};
			frontmatter: {
				title: PageTitle;
			};
			body: PageBody;
		};

		ancestors: {
			edges: {
				node: {
					fields: {
						id: PageId;
					};
					frontmatter: {
						title: PageTitle;
					};
				};
			}[];
		};

		menu_items: {
			edges: {
				node: {
					fields: {
						id: PageId;
					};
					frontmatter: {
						title: PageTitle;
						menu_title: PageTitle;
					};
				};
			}[];
		};
	};
}

const Page: FunctionComponent<Props> = props => {
	const { page, ancestors: ancestors_raw, config } = props.data;

	const {
		fields: { id: page_id },
		frontmatter: { title },
		body,
	} = page;

	const {
		url_path_prefix,
		menu_raw,
		use_breadcrumbs,
		use_next_page,
	} = config.siteMetadata;

	const { setMenu, menu } = useContext(Context);

	const menu_is_ready = useRef(false);

	const getPath = () => {
		if (!url_path_prefix) {
			return window.location.pathname;
		}

		return window.location.pathname.replace(
			new RegExp(`^/${url_path_prefix}`),
			""
		);
	};

	const ancestors = useRef(
		ancestors_raw.edges.map(({ node }) => ({
			page_id: node.fields.id,
			title: node.frontmatter.title,
		}))
	);

	useEffect(() => {
		if (menu.length) return;

		const getItems = (
			items: MenuItemRaw[],
			path: PageId[],
			sibling_is_active = false
		) =>
			items.reduce<Menu>(
				(acc, { id: page_id_raw, children: children_page_id_obj }) => {
					const id = uuid();
					let children: Menu = [];
					let children_id: Id[] = [];
					let title = "";
					const pathname = getPath();

					let page_id =
						page_id_raw[0] === "/"
							? page_id_raw.substr(1)
							: page_id_raw;

					const children_is_active =
						!!children_page_id_obj &&
						!!children_page_id_obj.find(
							({ id: sibling_page_id }) =>
								pathname === `/${sibling_page_id}`
						);

					if (children_page_id_obj) {
						children = getItems(
							children_page_id_obj,
							[...path, id],
							children_is_active
						);

						children_id = children.map(({ id }) => id);
					}

					const item = props.data.menu_items.edges.find(
						({ node }) => node.fields.id === page_id
					);

					if (item) {
						const {
							title: page_title,
							menu_title,
						} = item.node.frontmatter;

						title = menu_title || page_title;
					} else {
						title = page_id;
						page_id = "";
					}

					const is_active = !!page_id && pathname === `/${page_id}`;

					return [
						...acc,
						{
							id,
							page_id,
							title,
							children_id,
							submenu_is_open: false,
							is_active,
							sibling_is_active,
							path,
						},
						...children,
					];
				},
				[]
			);

		setMenu(() => {
			const menu_raw_parsed = JSON.parse(menu_raw) as MenuItemRaw[];
			const pathname = getPath();

			let menu = getItems(menu_raw_parsed, []);

			menu = menu.map(item => ({
				...item,
				submenu_is_open:
					!!item.children_id.length &&
					pathname.indexOf(`/${item.page_id}`) !== -1,
			}));

			return menu;
		});
	}, []);

	useEffect(() => {
		if (!menu.length || menu_is_ready.current) return;

		menu_is_ready.current = true;

		const pathname = getPath();

		const active_item_parent_path = pathname
			.split("/")
			.slice(1, -1)
			.join("/");

		setMenu(menu => {
			menu = menu.map(item => {
				const { page_id } = item;

				const is_active = !!page_id && pathname === `/${page_id}`;

				const submenu_is_open =
					!!item.children_id.length &&
					pathname.indexOf(`/${item.page_id}`) !== -1;

				const sibling_is_active =
					item.page_id.split("/").slice(0, -1).join("/") ===
					active_item_parent_path;

				return {
					...item,
					is_active,
					sibling_is_active,
					submenu_is_open: item.submenu_is_open
						? true
						: submenu_is_open,
				};
			});

			return menu;
		});
	}, [menu]);

	return (
		<Single
			page_id={page_id}
			title={title}
			body={body}
			ancestors={ancestors.current}
			use_breadcrumbs={use_breadcrumbs}
			use_next_page={use_next_page}
			use_mdx={true}
		/>
	);
};

export const query = graphql`
	query($id: String, $ancestors_id: [String], $menu_items_id: [String]) {
		page: mdx(fields: { id: { eq: $id } }) {
			fields {
				id
			}
			frontmatter {
				title
			}
			body
		}

		ancestors: allMdx(filter: { fields: { id: { in: $ancestors_id } } }) {
			edges {
				node {
					fields {
						id
					}
					frontmatter {
						title
					}
				}
			}
		}

		menu_items: allMdx(filter: { fields: { id: { in: $menu_items_id } } }) {
			edges {
				node {
					fields {
						id
					}
					frontmatter {
						title
						menu_title
					}
				}
			}
		}

		config: site {
			siteMetadata {
				menu_raw
				use_breadcrumbs
				use_next_page
				url_path_prefix
			}
		}
	}
`;

export default Page;
