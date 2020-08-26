import React, { FunctionComponent, useState, useEffect } from "react";
import Fuse from "fuse.js";

import styles from "./Results.module.styl";
import { Result } from "../Result";
import { Message } from "../Message";

interface Props {
	query: string;
	close: () => void;
	fuse: Fuse<SearchResult>;
}

export const Results: FunctionComponent<Props> = props => {
	const { query, close, fuse } = props;

	const [results, setResults] = useState<Fuse.FuseResult<SearchResult>[]>([]);

	useEffect(() => {
		if (!fuse) return;

		if (query.length > 2) {
			setResults(fuse.search(query));
		} else {
			setResults([]);
		}
	}, [query]);

	if (!results.length) {
		return <Message message="No results" />;
	}

	return (
		<ul className={styles.container}>
			{results.map(({ item: result }) => (
				<Result
					key={result.page_id}
					{...result}
					query={query}
					close={close}
				/>
			))}
		</ul>
	);
};
