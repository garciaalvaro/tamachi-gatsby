import React, { FunctionComponent } from "react";

interface Props {
	icon: "menu" | "search" | "close" | "sun" | "moon" | "collapse" | "expand";
}

export const Icon: FunctionComponent<Props> = props => {
	const { icon } = props;

	if (icon === "menu") {
		return (
			/* https://material.io/tools/icons/?icon=menu */
			<svg width="2.6rem" height="2.6rem" viewBox="0 0 24 24">
				<path d="M0 0h24v24H0z" fill="none" />
				<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
			</svg>
		);
	}

	if (icon === "search") {
		return (
			/* https://material.io/tools/icons/?icon=search */
			<svg width="2.6rem" height="2.6rem" viewBox="0 0 24 24">
				<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
				<path d="M0 0h24v24H0z" fill="none" />
			</svg>
		);
	}

	if (icon === "close") {
		return (
			/* https://material.io/tools/icons/?icon=close */
			<svg width="2.6rem" height="2.6rem" viewBox="0 0 24 24">
				<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
				<path d="M0 0h24v24H0z" fill="none" />
			</svg>
		);
	}

	if (icon === "sun") {
		return (
			/* http://www.alessioatzeni.com/meteocons/ */
			<svg
				version="1.1"
				width="2.8rem"
				height="2.8rem"
				viewBox="0 0 512 512"
			>
				<path d="M256 144c-61.75 0-112 50.25-112 112s50.25 112 112 112 112-50.251 112-112c0-61.75-50.25-112-112-112zM256 112c8.833 0 16-7.146 16-16v-32c0-8.833-7.167-16-16-16-8.854 0-16 7.167-16 16v32c0 8.854 7.146 16 16 16zM256 400c-8.854 0-16 7.167-16 16v32c0 8.854 7.146 16 16 16 8.833 0 16-7.146 16-16v-32c0-8.833-7.167-16-16-16zM380.417 154.167l22.625-22.625c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625 0l-22.625 22.625c-6.251 6.25-6.251 16.375 0 22.625 6.25 6.249 16.374 6.249 22.625 0zM131.541 357.854l-22.623 22.625c-6.252 6.25-6.252 16.376 0 22.625 6.249 6.25 16.373 6.25 22.623 0l22.625-22.625c6.251-6.291 6.251-16.375 0-22.625-6.249-6.25-16.374-6.292-22.625 0zM112 256c0-8.833-7.167-16-16-16h-32c-8.854 0-16 7.167-16 16 0 8.854 7.146 16 16 16h32c8.833 0 16-7.146 16-16zM448 240h-32c-8.854 0-16 7.167-16 16 0 8.854 7.146 16 16 16h32c8.833 0 16-7.146 16-16 0-8.833-7.167-16-16-16zM131.521 154.167c6.249 6.25 16.375 6.25 22.625 0 6.249-6.25 6.249-16.375 0-22.625l-22.625-22.625c-6.25-6.25-16.376-6.25-22.625 0-6.25 6.25-6.25 16.375 0 22.625l22.625 22.625zM380.459 357.812c-6.293-6.25-16.376-6.25-22.625 0s-6.293 16.375 0 22.625l22.625 22.625c6.249 6.249 16.374 6.249 22.625 0 6.249-6.25 6.249-16.376 0-22.625l-22.625-22.625z" />
			</svg>
		);
	}

	if (icon === "moon") {
		return (
			/* http://www.alessioatzeni.com/meteocons/ */
			<svg
				version="1.1"
				width="2.8rem"
				height="2.8rem"
				viewBox="75 75 350 350"
			>
				<path d="M248.082 263.932c-31.52-31.542-39.979-77.105-26.020-116.542-15.25 5.395-29.668 13.833-41.854 26.020-43.751 43.75-43.751 114.667 0 158.395 43.729 43.73 114.625 43.752 158.374 0 12.229-12.186 20.646-26.604 26.021-41.854-39.415 13.959-84.999 5.5-116.521-26.019z" />
			</svg>
		);
	}

	if (icon === "collapse") {
		return (
			/* https://material.io/tools/icons/?icon=expand_less */
			<svg width="2.2rem" height="2.2rem" viewBox="0 0 24 24">
				<path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
				<path d="M0 0h24v24H0z" fill="none" />
			</svg>
		);
	}

	if (icon === "expand") {
		return (
			/* https://material.io/tools/icons/?icon=expand_more */
			<svg width="2.2rem" height="2.2rem" viewBox="0 0 24 24">
				<path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
				<path d="M0 0h24v24H0z" fill="none" />
			</svg>
		);
	}

	return null;
};
