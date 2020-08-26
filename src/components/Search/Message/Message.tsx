import React, { FunctionComponent, useState, useLayoutEffect } from "react";

import styles from "./Message.module.styl";

interface Props {
	query?: string;
	message?: string;
}

// TODO: Improve logic
export const Message: FunctionComponent<Props> = props => {
	const { query, message: message_raw } = props;
	const [message, setMessage] = useState("");

	useLayoutEffect(() => {
		if (message_raw) {
			setMessage(message_raw);

			return;
		}

		if (!query) {
			setMessage("");

			return;
		}

		const chars_word = `character${query.length > 1 ? "" : "s"}`;
		const chars_left = 3 - query.length;
		const message = `Type ${chars_left} more ${chars_word}`;

		setMessage(message);
	}, [query, message_raw]);

	return <span className={styles.container}>{message}</span>;
};
