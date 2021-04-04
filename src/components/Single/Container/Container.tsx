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
			className={className({
				[styles.full_width]: !!full_width,
				[styles.use_border]: !!use_border,
				[styles.center]: !!center,
			})}
			style={{ maxWidth: max_width }}
		>
			{props.children}
		</div>
	);
};
