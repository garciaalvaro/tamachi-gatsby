import React, { FunctionComponent } from "react";

import styles from "./ToggleButton.module.styl";
import { Icon } from "@/utils";

interface Props {
	is_open: boolean;
	toggle: () => void;
}

export const ToggleButton: FunctionComponent<Props> = props => {
	const { is_open, toggle } = props;

	return (
		<button
			className={styles.container}
			onClick={toggle}
			aria-label="Toggle search"
		>
			<Icon icon={is_open ? "close" : "search"} />
		</button>
	);
};
