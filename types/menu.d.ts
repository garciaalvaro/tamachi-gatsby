interface MenuItemRaw {
	id: PageId;
	children?: MenuItemRaw[];
}

type MenuRaw = MenuItemRaw[];

interface MenuItem {
	id: Id;
	page_id: PageId;
	title: PageTitle;
	children_id: PageId[];
	submenu_is_open: boolean;
	is_active: boolean;
	sibling_is_active: boolean;
	path: (PageId | string)[];
}

type Menu = MenuItem[];
