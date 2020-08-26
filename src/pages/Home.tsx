import React, { FunctionComponent, useRef } from "react";
import { graphql } from "gatsby";

import { HomeList } from "../components/HomeList";

interface Props {
	pageContext: { pages: PageId[] };

	data: {
		pages: {
			edges: {
				node: {
					fields: { id: PageId };
					frontmatter: { title: PageTitle };
				};
			}[];
		};
	};
}

const Home: FunctionComponent<Props> = props => {
	const {
		pageContext: { pages },
		data: {
			pages: { edges },
		},
	} = props;

	const items = useRef(
		// As graphql gives a different sort from the one in frontmatter,
		// we loop through it to get the items in the correct order.
		pages.reduce<{ id: PageId; title: PageTitle }[]>((acc, id) => {
			const item = edges.find(({ node }) => node.fields.id === id);

			if (!item) {
				return acc;
			}

			const { title } = item.node.frontmatter;

			return [...acc, { id, title }];
		}, [])
	);

	return <HomeList items={items.current} />;
};

export const query = graphql`
	query($pages: [String]) {
		pages: allMdx(filter: { fields: { id: { in: $pages } } }) {
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
	}
`;

export default Home;
