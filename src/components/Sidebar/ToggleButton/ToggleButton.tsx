import React, { FunctionComponent } from "react";

import styles from "./ToggleButton.module.styl";
import { Icon, className } from "@/utils";

interface Props {
	is_open: boolean;
	toggle: () => void;
}

export const ToggleButton: FunctionComponent<Props> = props => {
	const { is_open, toggle } = props;

	return (
		<button
			className={className([
				styles.container,
				is_open ? styles.is_open : styles.is_closed,
			])}
			onClick={toggle}
			aria-label="Toggle sidebar"
		>
			<Icon icon={is_open ? "close" : "menu"} />
		</button>
	);
};
