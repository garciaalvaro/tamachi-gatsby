/**
 * This function receives an string | null | undefined values
 * or an object with those, and returns a single string composed
 * of the non-null space-separated values.
 */
export type ClassName = string | null | undefined | Record<string, boolean>;

export const className = (...classNames: ClassName[]): string => {
	return classNames
		.reduce<string[]>((acc, _className) => {
			let className = _className;

			if (typeof className === "object" && className !== null) {
				const classNameObj = className;

				className = Object.keys(className).reduce((acc, key) => {
					if (!classNameObj[key]) {
						return acc;
					}

					if (!acc) {
						return key;
					}

					return `${acc} ${key}`;
				}, "");
			}

			if (!className) {
				return acc;
			}

			return [...acc, className];
		}, [])
		.join(" ");
};
