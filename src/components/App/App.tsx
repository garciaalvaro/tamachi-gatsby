import React, {
	FunctionComponent,
	useContext,
	useEffect,
	useState,
} from "react";

import "./App.styl";
import * as styles from "./App.module.styl";
import { Context } from "@/context";
import { ColorSchemeToggle } from "../ColorSchemeToggle";
import { Search } from "../Search";
import { className } from "@/utils";

interface Props {
	is_home: boolean;
}

export const App: FunctionComponent<Props> = props => {
	const { is_home } = props;
	const { color } = useContext(Context);
	const [is_first_render, setIsFirstRender] = useState(true);

	useEffect(() => setIsFirstRender(false), []);

	// Hide the component before the second render.
	// Due to SSR "window" cant be used, so the initial
	// color will be the default one. This causes an
	// initial flicker on the page color.
	if (is_first_render) {
		return null;
	}

	return (
		<div className={className([styles.container, styles[color]])}>
			{props.children}

			<ColorSchemeToggle />

			{!is_home && <Search />}
		</div>
	);
};
