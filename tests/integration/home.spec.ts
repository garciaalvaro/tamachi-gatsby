describe("Home page", () => {
	it("renders several articles", () => {
		cy.visit("/");

		cy.get("[data-testid=article]").should("have.length.above", 5);
	});

	it("renders the color scheme button", () => {
		cy.visit("/");

		cy.get("[data-testid=color-scheme-toggle]").should("be.visible");
	});

	it("renders the light theme", () => {
		cy.visit("/", {
			onBeforeLoad(window) {
				cy.stub(window, "matchMedia")
					.withArgs("(prefers-color-scheme: dark)")
					.returns({
						matches: false,
					});
			},
		});

		cy.get("[data-testid=root]").should(
			"have.css",
			"background-color",
			"rgb(252, 252, 252)"
		);
	});

	it("renders the dark theme", () => {
		cy.visit("/", {
			onBeforeLoad(window) {
				cy.stub(window, "matchMedia")
					.withArgs("(prefers-color-scheme: dark)")
					.returns({
						matches: true,
					});
			},
		});

		cy.get("[data-testid=root]").should(
			"have.css",
			"background-color",
			"rgb(42, 42, 43)"
		);
	});
});
