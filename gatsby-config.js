const config = require("./config");

const {
	use_demo,
	name,
	description,
	menu_raw,
	labels,
	use_breadcrumbs,
	use_next_page,
	lang,
	short_name,
	start_url,
	background_color,
	theme_color,
	display,
	icon,
} = config;

module.exports = {
	siteMetadata: {
		// TODO: Find a better approach
		menu_raw: JSON.stringify(menu_raw),
		title: name,
		description,
		labels,
		use_breadcrumbs,
		use_next_page,
		lang,
	},

	plugins: [
		{
			resolve: "gatsby-source-filesystem",
			options: {
				path: `${__dirname}/content${use_demo ? "-demo" : ""}`,
				name: "content",
			},
		},

		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name,
				description,
				short_name,
				start_url,
				background_color,
				theme_color,
				display,
				icon,
			},
		},

		"gatsby-plugin-zopfli",

		"gatsby-plugin-offline",

		"gatsby-plugin-typescript",

		{
			resolve: "gatsby-plugin-sharp",
			options: {
				defaultQuality: 70,
			},
		},

		"gatsby-remark-unwrap-images",

		"gatsby-remark-images",

		"gatsby-remark-prismjs",

		{
			resolve: "gatsby-plugin-stylus",
			options: {
				import: [`${__dirname}/src/utils/variables.styl`],
			},
		},

		{
			resolve: "gatsby-plugin-mdx",
			options: {
				gatsbyRemarkPlugins: [
					"gatsby-remark-unwrap-images",
					{
						resolve: "gatsby-remark-images",
						options: {
							disableBgImage: true,
							maxWidth: 780,
							quality: 70,
							linkImagesToOriginal: false,
							backgroundColor: "none",
						},
					},

					"gatsby-remark-prismjs",
				],
			},
		},

		{
			resolve: "gatsby-plugin-layout",
			options: {
				component: `${__dirname}/src/layouts/index.tsx`,
			},
		},

		{
			resolve: "gatsby-alias-imports",
			options: {
				aliases: {
					"@": "src",
				},
			},
		},
	],
};
