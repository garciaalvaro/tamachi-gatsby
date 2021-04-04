import React, { FunctionComponent } from "react";

import * as styles from "./Container.module.styl";
import { className } from "@/utils";

interface Props {
	use_border?: boolean;
	full_width?: boolean;
	max_width?: number;
	center?: number;
}

export const Container: FunctionComponent<Props> = props => {
	const { center, use_border, full_width, max_width } = props;

	return (
		<div
			className={className([
				full_width ? styles.full_width : null,
				use_border ? styles.use_border : null,
				center ? styles.center : null,
			])}
			style={{ maxWidth: max_width }}
		>
			{props.children}
		</div>
	);
};
