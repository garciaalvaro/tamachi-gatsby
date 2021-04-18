describe("Sidebar", () => {
	it("doesn't appear in home", () => {
		cy.visit("/");

		cy.get("[data-testid=sidebar]").should("not.exist");
	});

	it("appears in single", () => {
		cy.visit("/tokyo/musashino");

		cy.get("[data-testid=sidebar]").should("be.visible");
	});

	it("activates the current page link", () => {
		cy.visit("/kyoto");
		cy.get("[data-testid=sidebar] [aria-current=page]").contains("Kyoto");

		cy.visit("/yamaguchi");
		cy.get("[data-testid=sidebar] [aria-current=page]").contains(
			"Yamaguchi"
		);

		cy.visit("/tokyo/musashino");
		cy.get("[data-testid=sidebar] [aria-current=page]")
			.contains("Musashino")
			.should("be.visible");

		cy.visit("/tokyo/shibuya/yoyogi");
		cy.get("[data-testid=sidebar] [aria-current=page]")
			.contains("Yoyogi")
			.should("be.visible");
	});

	// TODO
	it("sets a CSS border to the current page siblings", () => {
		cy.visit("/tokyo/musashino");

		cy.get("[data-testid=sidebar] [aria-current=page]")
			.parent()
			.as("active_link_container");

		cy.get("@active_link_container").then($element => {
			const { borderLeftWidth } = getComputedStyle(
				$element[0],
				":before"
			);

			expect(borderLeftWidth).to.equal("2px");
		});

		cy.get("@active_link_container")
			.parent()
			.then($element => {
				const $next =
					$element.next().first() || $element.siblings().first();

				const { borderLeftWidth } = getComputedStyle(
					$next.children().first()[0],
					":before"
				);

				expect(borderLeftWidth).to.equal("2px");
			});
	});
});
