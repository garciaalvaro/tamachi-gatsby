declare module "*.styl";

type Color = "light" | "dark";

type Id = string;

interface Config {
	menu_raw: string;
	lang: string;
	labels: {
		page_not_found_title: string;
		page_not_found_body: string;
		noscript: string;
	};
	title: string;
	description: string;
	use_breadcrumbs: boolean;
	use_next_page: boolean;
}
