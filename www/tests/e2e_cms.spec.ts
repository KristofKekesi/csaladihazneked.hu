import { expect, test } from "@playwright/test";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

test.describe("CMS index", () => {
	// Guard close
	if (!process.env.NEXT_PUBLIC_WORDPRESS_API_URL) {
		expect({ value: false }).toBeTruthy();
	}

	//test.beforeEach(async ({ page }) => {
	//	await page.goto(process.env.NEXT_PUBLIC_WORDPRESS_API_URL ?? "localhost:3001");
	//});

	//test("Redirect", async ({ page }) => {
	//	expect(page).toHaveURL(/csaladihazneked.hu/);
	//});
});
