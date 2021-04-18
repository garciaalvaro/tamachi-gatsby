// Import expect from Jest to prevent conflict with Cypress types
import { expect } from "@jest/globals";

import { getSearchResultMatches } from "@/utils";

const lorem =
	"Consectetur amet elit amet id reprehenderit reprehenderit amet nulla proident irure anim amet deserunt. Irure amet et non non velit nulla amet id nulla consectetur. Fugiat in adipisicing cillum occaecat.";

test("getSearchResultMatches: returns matches correctly", () => {
	expect(getSearchResultMatches(lorem, "amet").length).toBe(5);

	expect(getSearchResultMatches(lorem, "amet")[0]).toEqual({
		after:
			" elit amet id reprehenderit reprehenderit amet nulla proident irure anim amet deserunt. Irure amet et non non velit nulla amet id nulla consectetur. Fugiat in adipisicing cillum occaecat.",
		before: "Consectetur ",
		match: "amet",
	});
});

test("getSearchResultMatches: maximum_matches sets the limit of results", () => {
	expect(getSearchResultMatches(lorem, "amet", 99).length).toBe(6);
	expect(getSearchResultMatches(lorem, "amet", 2).length).toBe(2);
});

test("getSearchResultMatches: returns no results if there is no match", () => {
	expect(getSearchResultMatches(lorem, "qqq").length).toBe(0);
});
