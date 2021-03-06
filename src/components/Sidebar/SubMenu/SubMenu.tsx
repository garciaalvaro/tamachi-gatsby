import React, { FunctionComponent } from "react";

import * as styles from "./SubMenu.module.styl";
import { MenuItem } from "../MenuItem";
import { className } from "@/utils";

interface Props {
	items: Menu;
	is_open: boolean;
}

export const SubMenu: FunctionComponent<Props> = props => {
	const { items, is_open } = props;

	return (
		<ul
			className={className({
				[styles.container]: true,
				[styles.is_closed]: !is_open,
			})}
		>
			{items.map(item => (
				<MenuItem key={item.id} {...item} />
			))}
		</ul>
	);
};
