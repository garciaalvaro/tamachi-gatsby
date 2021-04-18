module.exports = {
	moduleNameMapper: {
		"\\.(css|styl)$": "identity-obj-proxy",
		"^@/(.*)$": "<rootDir>/src/$1",
	},
	testMatch: ["<rootDir>/tests/unit/**/*.ts"],
};
