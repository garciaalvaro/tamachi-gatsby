import React, { useEffect, useRef, FunctionComponent } from "react";

import * as styles from "./InputField.module.styl";

interface Props {
	query: string;
	setQuery: React.Dispatch<React.SetStateAction<SearchQuery>>;
}

export const InputField: FunctionComponent<Props> = props => {
	const { query, setQuery } = props;
	const $input = useRef<HTMLInputElement | null>(null);

	useEffect(() => {
		if (!$input.current) return;

		// Focus the input on mount
		$input.current.focus();
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<label className={styles.label} htmlFor="search-input">
					Search
				</label>

				<input
					ref={$input}
					placeholder="Enter your search"
					className={styles.input}
					type="text"
					value={query}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						const query = e.target.value;

						setQuery(query);
					}}
				/>
			</div>
		</div>
	);
};
