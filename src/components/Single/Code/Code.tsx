import React, { useRef, useEffect, useState, FunctionComponent } from "react";
import copy from "copy-text-to-clipboard";

import * as styles from "./Code.module.styl";
import { className as classNameUtil } from "@/utils";

interface Props {
	className: string;
}

const getLanguage = (className: string) => {
	const language_raw = className.replace("language-", "");

	const languages: Record<string, string> = {
		// TODO: Add more languages
		javascript: "JavaScript",
		php: "PHP",
	};

	return languages[language_raw] || null;
};

export const Code: FunctionComponent<Props> = props => {
	const { className } = props;
	const $pre = useRef<HTMLPreElement | null>(null);
	const $button = useRef<HTMLButtonElement | null>(null);
	const language = useRef(getLanguage(className));
	const [just_copied, setJustCopied] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => setJustCopied(false), 2000);

		return () => clearTimeout(timeout);
	}, [just_copied]);

	return (
		<div
			className={classNameUtil([
				styles.container,
				styles.prismTomorrow_night,
			])}
		>
			<pre ref={$pre} {...props} />

			{language.current && (
				<div className={styles.label}>
					<span>{language.current}</span>
				</div>
			)}

			<button
				ref={$button}
				className={classNameUtil([
					styles.button,
					just_copied ? styles.justCopied : "",
				])}
				onClick={() => {
					if (!$pre.current) return;

					copy($pre.current.textContent || "");
					setJustCopied(true);
				}}
			>
				<span>{just_copied ? "Copied" : "Copy"}</span>
			</button>
		</div>
	);
};
