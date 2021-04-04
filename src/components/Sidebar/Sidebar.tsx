import React, {
	FunctionComponent,
	useState,
	useEffect,
	Fragment,
	useContext,
} from "react";
import Scrollbar from "react-scrollbars-custom";

import * as styles from "./Sidebar.module.styl";
import { Context } from "@/context";
import { Menu } from "./Menu";
import { ToggleButton } from "./ToggleButton";
import { className, useWindowSize } from "@/utils";

export const Sidebar: FunctionComponent = () => {
	const { path } = useContext(Context);
	const { window_width } = useWindowSize();
	const [is_open, setIsOpen] = useState(false);

	useEffect(() => {
		setIsOpen(false);
	}, [window_width, path]);

	useEffect(() => {
		const callback = (event: KeyboardEvent) => {
			if (event.key !== "Escape") return;

			setIsOpen(false);
		};

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore TODO
		document.addEventListener("keydown", callback);

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore TODO
		return () => document.removeEventListener("keydown", callback);
	}, []);

	return (
		<Fragment>
			<nav
				className={className([
					styles.container,
					is_open ? styles.is_open : styles.is_closed,
				])}
			>
				<Scrollbar>
					<Menu />
				</Scrollbar>
			</nav>

			<ToggleButton
				is_open={is_open}
				toggle={() => setIsOpen(!is_open)}
			/>
		</Fragment>
	);
};
