type PageId = string;

type PageTitle = string;

type PageBody = string;

type PageUrl = string;

interface PageLink {
	page_id: PageId;
	title: PageTitle;
}

interface Page extends PageLink {
	ancestors: PageId[];
	body: PageBody;
}
