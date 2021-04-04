import React, {
	useState,
	useEffect,
	Fragment,
	FunctionComponent,
	useContext,
} from "react";
import Scrollbar from "react-scrollbars-custom";
import { useStaticQuery, graphql } from "gatsby";
import Fuse from "fuse.js";
import removeMd from "remove-markdown";

import * as styles from "./Search.module.styl";
import { ToggleButton } from "./ToggleButton";
import { InputField } from "./InputField";
import { Results } from "./Results";
import { Context } from "@/context";
import { Message } from "./Message";
import { getAncestors, useWindowSize } from "@/utils";

interface GraphqlQuery {
	allMdx: {
		nodes: SearchResultRaw[];
	};
}

export const Search: FunctionComponent = () => {
	const { path } = useContext(Context);
	const { window_width } = useWindowSize();
	const [is_open, setIsOpen] = useState(false);
	const [query, setQuery] = useState<SearchQuery>("");
	const [fuse, setFuse] = useState<Fuse<SearchResult> | null>(null);

	const close = () => {
		setIsOpen(false);
		setQuery("");
	};

	const {
		allMdx: { nodes: pages_data },
	} = useStaticQuery<GraphqlQuery>(graphql`
		query {
			allMdx {
				nodes {
					fields {
						id
						ancestors_id
					}
					frontmatter {
						title
					}
					rawBody
				}
			}
		}
	`);

	useEffect(() => {
		// If Fuse has already been set
		if (fuse) return;

		const regex = new RegExp("^(---[^-]*?---\n+)(.*?)", "gm");

		const pages = pages_data.reduce<SearchResult[]>(
			(acc, { fields, frontmatter, rawBody }) => {
				// Exclude the home page
				if (fields.id === "home") {
					return acc;
				}

				return [
					...acc,
					{
						page_id: fields.id,
						ancestors: getAncestors(
							fields.id,
							fields.ancestors_id,
							pages_data
						),
						body: removeMd(rawBody.replace(regex, "$2")),
						title: frontmatter.title,
					},
				];
			},
			[]
		);

		const options = {
			includeScore: true,
			keys: ["title", "body"],
			includeMatches: true,
			findAllMatches: true,
		};

		setFuse(new Fuse(pages, options));
	}, [is_open]);

	useEffect(() => {
		setIsOpen(false);
		setQuery("");
	}, [window_width, path]);

	useEffect(() => {
		const callback = (event: KeyboardEvent) => {
			if (event.key !== "Escape") return;

			close();
		};

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore TODO
		document.addEventListener("keydown", callback);

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore TODO
		return () => document.removeEventListener("keydown", callback);
	}, []);

	return (
		<Fragment>
			{is_open && (
				<div className={styles.container}>
					<Scrollbar>
						<InputField query={query} setQuery={setQuery} />

						{query.length < 3 && <Message query={query} />}

						{query.length > 2 && fuse && (
							<Results fuse={fuse} query={query} close={close} />
						)}
					</Scrollbar>
				</div>
			)}

			<ToggleButton
				is_open={is_open}
				toggle={() => {
					setIsOpen(!is_open);
					setQuery("");
				}}
			/>
		</Fragment>
	);
};
