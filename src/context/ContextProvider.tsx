import React, { useState, FunctionComponent, useLayoutEffect } from "react";

import { Context, initial_props } from "./Context";
import { getColorScheme } from "@/utils";

interface Props {
	path: string;
}

export const ContextProvider: FunctionComponent<Props> = props => {
	const [menu, setMenu] = useState<ContextProps["menu"]>(initial_props.menu);

	const [color, setColor] = useState<ContextProps["color"]>(
		initial_props.color
	);

	// We need to set the color in the browser so we call it
	// in the first render using useLayoutEffect, so it is
	// executed before the page is painted.
	useLayoutEffect(() => setColor(getColorScheme()), []);

	return (
		<Context.Provider
			value={{
				path: props.path,
				menu,
				setMenu,
				color,
				setColor: (color: Color) => {
					setColor(color);
					localStorage.setItem("color", color);
				},
			}}
		>
			{props.children}
		</Context.Provider>
	);
};
