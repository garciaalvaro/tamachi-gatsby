/**
 * This function receives an array of strings or null values,
 * and returns a single string composed of the non-null
 * space-separated values.
 */
export const className = (classes: (string | null)[]): string =>
	classes.filter(className => className).join(" ");
