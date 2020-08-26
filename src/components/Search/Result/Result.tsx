import React, { useEffect, useState, FunctionComponent } from "react";
import { Link } from "gatsby";

import styles from "./Result.module.styl";
import { NavigationBreadcrumbs } from "@/components/NavigationBreadcrumbs";
import { getSearchResultMatches as getMatches } from "@/utils";

interface Props extends SearchResult {
	query: string;
	close: () => void;
}

export const Result: FunctionComponent<Props> = props => {
	const { ancestors, page_id, title, body, query, close } = props;

	const [title_matches, setTitleMatches] = useState<SearchResultMatch[]>(
		getMatches(title, query, 1)
	);

	const [body_matches, setBodyMatches] = useState<SearchResultMatch[]>(
		getMatches(body, query, 5)
	);

	useEffect(() => {
		setTitleMatches(getMatches(title, query, 1));
		setBodyMatches(getMatches(body, query, 5));
	}, [query]);

	return (
		<li className={styles.container}>
			<Link className={styles.content} to={`/${page_id}`} onClick={close}>
				<NavigationBreadcrumbs ancestors={ancestors} use_span={true} />

				{title_matches.length ? (
					title_matches.map(({ before, after, match }, i) => (
						<h3 key={i} className={styles.title}>
							<span>{before}</span>
							<span className={styles.match}>{match}</span>
							<span>{after}</span>
						</h3>
					))
				) : (
					<h3 className={styles.title}>{title}</h3>
				)}

				{body_matches.map(({ before, after, match }, i) => (
					<div key={i} className={styles.body}>
						<span>{before}</span>
						<span className={styles.match}>{match}</span>
						<span>{after}</span>
					</div>
				))}
			</Link>
		</li>
	);
};
