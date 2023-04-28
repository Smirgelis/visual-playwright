const { test, expect, beforeAll, beforeEach } = require('@playwright/test');
const websites = require('../website.json');

const globalSetup = async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
};

for (const website of websites) {
    test(`Match screen - ${website}`, async ({ page }) => {
        // The screenshot will be taken in the beforeEach hook
        // after the page has fully loaded
        await page.goto(website);
    });

    test.beforeEach(async ({ page }) => {
        // Wait for the page to fully load before taking the screenshot
        await page.waitForLoadState('networkidle');
        expect(await page.screenshot()).toMatchSnapshot(`${website}-screenshot`);
    });
}

module.exports = { globalSetup };
