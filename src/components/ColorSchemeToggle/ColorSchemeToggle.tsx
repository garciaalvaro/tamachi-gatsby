import React, { FunctionComponent, useContext } from "react";

import * as styles from "./ColorSchemeToggle.module.styl";
import { Context } from "@/context";
import { Icon } from "@/utils";

export const ColorSchemeToggle: FunctionComponent = () => {
	const { color, setColor } = useContext(Context);

	return (
		<button
			className={styles.container}
			onClick={() => setColor(color === "light" ? "dark" : "light")}
			aria-label="Toggle color scheme"
			data-testid="color-scheme-toggle"
		>
			<Icon icon={color === "light" ? "moon" : "sun"} />
		</button>
	);
};
