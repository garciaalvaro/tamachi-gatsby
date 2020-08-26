import React, { FunctionComponent } from "react";

import styles from "./Container.module.styl";
import { className } from "@/utils";

interface Props {
	use_border?: boolean;
	full_width?: boolean;
	max_width?: number;
}

export const Container: FunctionComponent<Props> = props => {
	const { use_border, full_width, max_width } = props;

	return (
		<div
			className={className([
				full_width ? styles.full_width : null,
				use_border ? styles.use_border : null,
			])}
			style={{ maxWidth: max_width }}
		>
			{props.children}
		</div>
	);
};
