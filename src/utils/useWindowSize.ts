import { useState, useEffect } from "react";
import throttle from "lodash.throttle";

// Due to SSR we can only use window or document after mount
export const useWindowSize = (
	time = 300
): { window_width: number; window_height: number } => {
	const [width, setWidth] = useState(
		typeof window !== "undefined" ? window.innerWidth : 1
	);

	const [height, setHeight] = useState(
		typeof window !== "undefined" ? window.innerHeight : 1
	);

	const setSize = () => {
		setWidth(window.innerWidth);

		setHeight(window.innerHeight);
	};

	const setSizeThrottled = throttle(setSize, time, {
		leading: true,
		trailing: true,
	});

	useEffect(() => {
		window.addEventListener("resize", setSizeThrottled);

		return () => {
			window.removeEventListener("resize", setSizeThrottled);
			setSizeThrottled.cancel();
		};
	}, []);

	return { window_width: width, window_height: height };
};
