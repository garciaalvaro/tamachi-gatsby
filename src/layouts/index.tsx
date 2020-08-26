import React, { FunctionComponent, Fragment } from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

import { ContextProvider } from "@/context";
import { App } from "@/components/App";
import { Main } from "@/components/Main";
import { Sidebar } from "@/components/Sidebar";

interface Props {
	path: string;
	pageContext: {
		id?: string;
	};
}

interface GraphqlQuery {
	config: {
		siteMetadata: Config;
	};
}

const LayoutContainer: FunctionComponent<Props> = props => {
	const { path } = props;

	return (
		<ContextProvider path={path}>
			<Layout {...props}>{props.children}</Layout>
		</ContextProvider>
	);
};

const Layout: FunctionComponent<Props> = props => {
	const is_home = props.path === "/";

	const {
		config: {
			siteMetadata: { lang, title, description, labels },
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
		<Fragment>
			<Helmet>
				<html lang={lang} />

				<title>{title}</title>

				<meta name="description" content={description} />

				<noscript>{labels.noscript}</noscript>
			</Helmet>

			<App is_home={is_home}>
				<Main>{props.children}</Main>

				{!is_home && <Sidebar />}
			</App>
		</Fragment>
	);
};

export default LayoutContainer;
