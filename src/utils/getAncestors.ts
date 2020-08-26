export const getAncestors = (
	page_id: PageId,
	ancestors_page_id: PageId[],
	items: SearchResultRaw[]
): PageLink[] =>
	ancestors_page_id.reduce<PageLink[]>((acc, ancestor_page_id) => {
		const ancestor = items.find(
			({ fields: { id } }) => id === ancestor_page_id
		);

		if (!ancestor) {
			return acc;
		}

		const {
			fields: { id },
			frontmatter: { title },
		} = ancestor;

		return [...acc, { page_id: id, title }];
	}, []);
