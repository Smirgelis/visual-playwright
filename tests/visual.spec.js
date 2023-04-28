const { test, expect } = require('@playwright/test');
const websites = require('../website.json');

for (const website of websites) {
    test(`Match screen - ${website}`, async ({ page }) => {
        await page.goto(website);
        await page.waitForLoadState('networkidle');
        const screenshotPath = `screenshots/${website}-fullpage.png`;
        await page.screenshot({ path: screenshotPath, fullPage: true });
        expect(await page.screenshot({ fullPage: true })).toMatchSnapshot(screenshotPath, { toMatchOptions: { threshold: 60 } });
    });
}

