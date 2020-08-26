import React, { FunctionComponent, useContext } from "react";

import styles from "./ColorSchemeToggle.module.styl";
import { Context } from "@/context";
import { Icon } from "@/utils";

export const ColorSchemeToggle: FunctionComponent = () => {
	const { color, setColor } = useContext(Context);

	return (
		<button
			className={styles.container}
			onClick={() => setColor(color === "light" ? "dark" : "light")}
			aria-label="Toggle color scheme"
		>
			<Icon icon={color === "light" ? "moon" : "sun"} />
		</button>
	);
};
