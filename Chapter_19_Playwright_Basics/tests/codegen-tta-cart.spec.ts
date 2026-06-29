import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
    await page.getByRole('heading', { name: 'TTACart' }).click();
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="password"]').click();
    await page.getByRole('heading', { name: 'Accepted usernames are:' }).click();
    await expect(page.getByRole('heading', { name: 'TTACart' })).toBeVisible();
    await expect(page.locator('[data-test="login-credentials"]')).toContainText('standard_user locked_out_user problem_user performance_glitch_user error_user visual_user');
});