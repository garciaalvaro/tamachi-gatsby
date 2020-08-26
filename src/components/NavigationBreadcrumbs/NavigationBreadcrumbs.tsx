import React, { FunctionComponent } from "react";

import styles from "./NavigationBreadcrumbs.module.styl";
import { NavigationBreadcrumbsItem } from "./NavigationBreadcrumbsItem";

interface Props {
	ancestors: PageLink[];
	use_span?: boolean;
}

export const NavigationBreadcrumbs: FunctionComponent<Props> = props => {
	const { ancestors, use_span } = props;

	return (
		<nav className={styles.container}>
			<ol>
				{ancestors
					.sort(
						(a, b) =>
							a.page_id.split("/").length -
							b.page_id.split("/").length
					)
					.map(({ page_id, title }) => (
						<NavigationBreadcrumbsItem
							key={page_id}
							page_id={page_id}
							title={title}
							use_span={use_span || false}
						/>
					))}
			</ol>
		</nav>
	);
};
