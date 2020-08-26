import React, { FunctionComponent } from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Single } from "@/components/Single";

interface GraphqlQuery {
	config: {
		siteMetadata: Config;
	};
}

const Error404: FunctionComponent = () => {
	const {
		config: {
			siteMetadata: { labels },
		},
	} = useStaticQuery<GraphqlQuery>(graphql`
		query {
			config: site {
				siteMetadata {
					lang
					title
					description
					labels {
						page_not_found_title
						page_not_found_body
						noscript
					}
				}
			}
		}
	`);

	return (
		<Single
			title={labels.page_not_found_title}
			body={labels.page_not_found_body}
			use_breadcrumbs={false}
			use_next_page={false}
			use_mdx={false}
		/>
	);
};

export default Error404;
