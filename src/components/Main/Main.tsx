import React, {
	FunctionComponent,
	useLayoutEffect,
	useRef,
	useContext,
} from "react";
import Scrollbar from "react-scrollbars-custom";

import styles from "./Main.module.styl";
import { Context } from "@/context";

export const Main: FunctionComponent = props => {
	const $scrollbar = useRef<Scrollbar["elementRefScroller"] | null>(null);
	const { path } = useContext(Context);

	// We use useLayoutEffect to scroll to the top
	// before the content is painted into the page
	useLayoutEffect(() => {
		if (!$scrollbar.current) return;

		$scrollbar.current.scrollerElement.scrollTop = 0;
	}, [path]);

	return (
		<main className={styles.container}>
			<Scrollbar ref={$scrollbar}>{props.children}</Scrollbar>
		</main>
	);
};
