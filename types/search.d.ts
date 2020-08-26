type SearchQuery = string;

interface SearchResultRaw {
	fields: { id: PageId; ancestors_id: PageId[] };
	frontmatter: { title: PageTitle };
	rawBody: PageBody;
}

interface SearchResult {
	page_id: PageId;
	ancestors: PageLink[];
	title: PageTitle;
	body: PageBody;
}

interface SearchResultMatch {
	before: string;
	after: string;
	match: string;
}
