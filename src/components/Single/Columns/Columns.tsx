import React, { FunctionComponent } from "react";

import styles from "./Columns.module.styl";
import { className } from "@/utils";

interface Props {
	responsive?: boolean;
	column_gap?: number;
}

export const Columns: FunctionComponent<Props> = props => {
	const { responsive, column_gap } = props;

	return (
		<div
			className={className([
				styles.container,
				responsive !== false ? styles.responsive : null,
			])}
			style={{ columnGap: column_gap, rowGap: column_gap }}
		>
			{props.children}
		</div>
	);
};
