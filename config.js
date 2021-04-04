const { existsSync } = require("fs");

const use_demo = !existsSync("content") || process.env.USE_DEMO === "yes";

// If a content folder exists use it, otherwise use the demo one
const config = use_demo
	? require("./content-demo/config")
	: require("./content/config");

module.exports = {
	...config,
	url_path_prefix: config.url_path_prefix || "",
	menu_raw: config.menu,
	use_demo,
};
