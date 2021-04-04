import React, { FunctionComponent } from "react";
import { Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";

import * as styles from "./Single.module.styl";
import { NavigationBreadcrumbs } from "../NavigationBreadcrumbs";
import { NavigationNext } from "../NavigationNext";
import { Code } from "./Code";
import { Columns } from "./Columns";
import { Container } from "./Container";
import { LinkList } from "./LinkList";

interface Props {
	page_id?: PageId;
	ancestors?: PageLink[];
	title: PageTitle;
	body: PageBody;
	use_breadcrumbs: boolean;
	use_next_page: boolean;
	use_mdx: boolean;
}

export const Single: FunctionComponent<Props> = props => {
	const {
		page_id,
		title,
		body,
		ancestors,
		use_breadcrumbs,
		use_next_page,
		use_mdx,
	} = props;

	return (
		<article className={styles.container}>
			<div className={styles.header}>
				{use_breadcrumbs && !!ancestors?.length && (
					<NavigationBreadcrumbs ancestors={ancestors} />
				)}

				<h1 className={styles.title}>
					{page_id ? (
						<Link className={styles.link} to={`/${page_id}`}>
							{title}
						</Link>
					) : (
						<span className={styles.link}>{title}</span>
					)}
				</h1>
			</div>

			<div className={styles.content}>
				{use_mdx ? (
					<MDXProvider
						components={{ pre: Code, Columns, Container, LinkList }}
					>
						<MDXRenderer>{body}</MDXRenderer>
					</MDXProvider>
				) : (
					body
				)}
			</div>

			{use_next_page && <NavigationNext />}
		</article>
	);
};
