describe("Color scheme toggle", () => {
	it("switches the color scheme in home", () => {
		cy.visit("/", {
			onBeforeLoad(window) {
				cy.stub(window, "matchMedia")
					.withArgs("(prefers-color-scheme: dark)")
					.returns({
						matches: true,
					});
			},
		});

		cy.get("[data-testid=root]").as("root");

		cy.get("@root").should(
			"have.css",
			"background-color",
			"rgb(42, 42, 43)"
		);

		cy.get("[data-testid=color-scheme-toggle]").click();

		cy.get("@root").should(
			"have.css",
			"background-color",
			"rgb(252, 252, 252)"
		);
	});

	it("switches the color scheme in single", () => {
		cy.visit("/tokyo/musashino", {
			onBeforeLoad(window) {
				cy.stub(window, "matchMedia")
					.withArgs("(prefers-color-scheme: dark)")
					.returns({
						matches: true,
					});
			},
		});

		cy.get("[data-testid=root]").as("root");

		cy.get("@root").should(
			"have.css",
			"background-color",
			"rgb(42, 42, 43)"
		);

		cy.get("[data-testid=color-scheme-toggle]").click();

		cy.get("@root").should(
			"have.css",
			"background-color",
			"rgb(252, 252, 252)"
		);
	});
});
