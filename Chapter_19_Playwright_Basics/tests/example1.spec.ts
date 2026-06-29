import { test, expect } from 'playwright/test'

//page - Page is the inbuilt fixture is automaticallly given to tou,,
//which are then function you can directly use in playwright 

test("verify that the title will be TTA cart", async ({ page }) => {

        await page.goto("https://app.thetestingacademy.com/playwright/ttacart/");
        page.waitForTimeout(5000);
        await expect(page).toHaveTitle("TTACart - Login");
});
