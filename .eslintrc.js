module.exports = {
	ignorePatterns: ["/content", ".cache", "/public", "node_modules"],

	parser: "@typescript-eslint/parser",

	extends: [
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
		"prettier",
	],

	env: {
		browser: true,
		node: true,
		es2020: true,
	},

	rules: {
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/camelcase": "off",
		"@typescript-eslint/no-var-requires": "off",
		"@typescript-eslint/ban-ts-ignore": "off",
		"react/react-in-jsx-scope": "off",
		"react/prop-types": "off",
		"react/display-name": "off",
	},

	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},

	settings: {
		react: {
			version: "detect",
		},
	},
};
