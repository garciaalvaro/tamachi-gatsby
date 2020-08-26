export const getSearchResultMatches = (
	string: string,
	search_value: string,
	maximum_matches = 5,
	offset = 30
): SearchResultMatch[] => {
	const string_length = string.length;
	const search_value_length = search_value.length;
	let from_index = 0;
	const string_lowercase = string.toLowerCase();
	const search_value_lowercase = search_value.toLowerCase();

	return [...Array(maximum_matches)].reduce<SearchResultMatch[]>(matches => {
		const index = string_lowercase.indexOf(
			search_value_lowercase,
			from_index
		);

		if (index === -1) {
			return matches;
		}

		from_index = index + 1;

		const before_index = Math.max(0, index - offset);

		const after_index = Math.min(
			string_length,
			index + search_value_length + offset
		);

		return [
			...matches,
			{
				match: string.substring(index, index + search_value_length),

				before:
					before_index > 0
						? `…${string.substring(before_index, index)}`
						: string.substring(before_index, index),

				after: string.substring(
					index + search_value_length,
					// We want the text to overflow the container
					after_index * 5
				),
			},
		];
	}, []);
};
