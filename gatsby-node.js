const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

const { use_demo, menu_raw } = require("./config");

exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions;

	// Create extra fields for MDX files
	if (node.internal.type === "Mdx") {
		const path = createFilePath({
			node,
			getNode,
			basePath: use_demo ? "content-demo/pages" : "content/pages",
		});

		const id = path.replace(/(^\/pages\/)|(\/$)/g, "");

		const ancestors_id = id
			.split("/")
			.slice(0, -1)
			.reduce(
				(acc, ancestor) => [
					...acc,
					acc.length ? `${acc.slice(-1)[0]}/${ancestor}` : ancestor,
				],
				[]
			);

		createNodeField({
			node,
			name: "id",
			value: id,
		});

		createNodeField({
			node,
			name: "ancestors_id",
			value: ancestors_id,
		});
	}
};

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;

	const query = await graphql(`
		query {
			mdx_pages: allMdx {
				edges {
					node {
						fields {
							id
							ancestors_id
						}
						frontmatter {
							pages
						}
					}
				}
			}
		}
	`);

	const getItems = items =>
		items.reduce((acc, item) => {
			const id = item.id[0] === "/" ? item.id.substr(1) : item.id;

			if (item.children) {
				return [...acc, id, ...getItems(item.children)];
			}

			return [...acc, id];
		}, []);

	const menu_items_id = getItems(menu_raw);

	// Loop through MDX files and create a url path for each file
	query.data.mdx_pages.edges.forEach(({ node }) => {
		const { id, ancestors_id } = node.fields;

		// If the page is home set the path to /
		if (id === "home") {
			const pages = node.frontmatter.pages.map(item => item.substr(1));

			createPage({
				path: "/",
				component: path.resolve("src/pages/Home.tsx"),
				context: { id, pages },
			});
		} else {
			createPage({
				path: id,
				component: path.resolve("src/pages/Page.tsx"),
				context: { id, ancestors_id, menu_items_id },
			});
		}
	});
};
