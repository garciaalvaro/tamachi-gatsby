module.exports = {
	lang: "en",
	name: "tamachi-gatsby",
	description: "Gatsby site for documentation or blogging",
	short_name: "tamachi-gatsby",
	start_url: "/",
	background_color: "#fc0",
	theme_color: "#fc0",
	display: "standalone",
	// This path is relative to the root of the site
	icon: "content-demo/assets/icon.png",
	labels: {
		page_not_found_title: "Oops! That page can't be found",
		page_not_found_body:
			"It looks like nothing was found at this location. Maybe try one of the links in the sidebar or a search?",
		noscript:
			"This site needs to have JavaScript active to work correctly.",
	},
	use_breadcrumbs: true,
	use_next_page: true,
	url_path: "tamachi-gatsby",
	menu: [
		{
			id: "/home",
		},
		{
			id: "/kanagawa",
		},
		{
			id: "/kyoto",
		},
		{
			id: "/okayama",
		},
		{
			id: "/okinawa",
		},
		{
			id: "/tokyo",
			children: [
				{
					id: "/tokyo/chuo",
				},
				{
					id: "/tokyo/musashino",
				},
				{
					id: "/tokyo/shibuya",
					children: [
						{
							id: "/tokyo/shibuya/yoyogi",
						},
					],
				},
				{
					id: "/tokyo/shinjuku",
				},
			],
		},
		{
			id: "/yamaguchi",
		},
	],
};
