import { expect, test } from "@playwright/test";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

test.describe("Index page", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto(process.env.PLAYWRIGHT_TEST_BASE_URL ?? "localhost:3000");
	});

	test("Layout", async ({ page }) => {
		// Header
		const header = page.locator("header");
		await expect(header).toBeVisible();

		// About is optional
		// Partners are optional
		// Blueprints are optional

		// Newsletter
		const newsletter = page.locator("#newsletter-sign-up");
		await expect(newsletter).toBeVisible();

		// Contacts
		const contacts = page.locator("#elerhetosegek");
		await expect(contacts).toBeVisible();

		// Footer
		const footer = page.locator("footer");
		await expect(footer).toBeVisible();
	});
});
