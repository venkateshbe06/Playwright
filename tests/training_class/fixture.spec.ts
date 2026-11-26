import {test, chromium} from '@playwright/test'

// manully we are lanuching browser, context, page
test("Fixture", async({}) => {
    const browser = await chromium.launch(); // browser fixture
    const context = await browser.newContext(); // context browser
    const page = await context.newPage(); // page fixture
    await page.goto("https://www.instagram.com/");
    await page.waitForTimeout(30000);
})

// automatically create brower, context 
test("Fixture", async({page}) => {
    // const browser = await chromium.launch(); // browser fixture
    // const context = await browser.newContext(); // context browser
    // const page = await context.newPage(); // page fixture
    await page.goto("https://www.instagram.com/");
    await page.waitForTimeout(2000);
})