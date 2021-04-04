import React, { FunctionComponent, useContext } from "react";

import * as styles from "./Menu.module.styl";
import { MenuItem } from "../MenuItem";
import { Context } from "@/context";

export const Menu: FunctionComponent = () => {
	const { menu } = useContext(Context);

	return (
		<ul className={styles.container}>
			{menu.map(item =>
				item.path.length ? null : <MenuItem key={item.id} {...item} />
			)}
		</ul>
	);
};
