module.exports = {
	moduleNameMapper: {
		"\\.(css|styl)$": "identity-obj-proxy",
	},
	setupFilesAfterEnv: ["jest-enzyme"],
	testEnvironment: "enzyme",
};
