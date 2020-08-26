const { existsSync } = require("fs");

const use_demo = !existsSync("content");

// If a content folder exists use it, otherwise use the demo one
const config = use_demo
	? require("./content-demo/config")
	: require("./content/config");

module.exports = {
	...config,
	menu_raw: config.menu,
	use_demo,
};
