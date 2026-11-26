import {test, expect, chromium, Browser, BrowserContext, Page} from "@playwright/test";

test('Windows Handling', async ({}) =>  {

    const browser : Browser = await chromium.launch();
    const context : BrowserContext = await browser.newContext();
    const mainpage : Page = await context.newPage();
    await mainpage.goto("https://testautomationpractice.blogspot.com/")
    await mainpage.screenshot({path : "tests/images/visible_screenshot.png"})

    await mainpage.screenshot(
        {
            path : "tests/images/fullpage_screenshot.png",
            fullPage : true
        }
    )
    await mainpage
        .getByRole("button", {name : "New Tab"})
        .screenshot({path : "tests/images/particular_element.jpeg"});
    
    const [newpage] = await Promise.all([
    // page - waitForEvent('popup')  - trigger Listener before click "New Tab" button 
    // context - waitForEvent('page')

    // context.waitForEvent('page'), 
    mainpage.waitForEvent('popup'),
    mainpage.getByRole("button", {name : "New Tab"}).click()
    ])
    await newpage.waitForLoadState();
    await expect(newpage).toHaveURL("https://www.pavantestingtools.com/");
    await newpage.locator('[name="q"]').fill("playwright");
    await newpage.waitForTimeout(3000);

    await mainpage.bringToFront();
    await mainpage.locator('#sunday').click();
    await mainpage.waitForTimeout(3000);


})

test.only('Popup Windows', async ({}) =>  {

    const browser : Browser = await chromium.launch();
    const context : BrowserContext = await browser.newContext();
    const mainpage : Page = await context.newPage();
    await mainpage.goto("https://testautomationpractice.blogspot.com/")
    
    
    const [newpage] = await Promise.all([
    mainpage.waitForEvent('popup'),
    // mainpage.getByRole("button", {name : "New Tab"}).click()
    mainpage.getByRole("button", { name : "Popup Windows"}).click()
    // mainpage.getByText("Popup Windows").click()
    ])

    await newpage.waitForLoadState();
    await expect(newpage).toHaveURL("https://www.selenium.dev/");
    await newpage.waitForTimeout(3000);

    await mainpage.bringToFront();
    await mainpage.locator('#monday').click();
    await mainpage.waitForTimeout(3000);


})

test('annotations1', async ({page}) => {
    console.log('TEST 1');
})

test('annotations2', async ({page}) => {
    console.log('TEST 2');
})

test('annotations3', async ({page}) => {
    console.log('TEST 3');
})

test('annotations4', async ({page}) => {
    console.log('TEST 4');
})

test('annotations5', async ({page}) => {
    console.log('TEST 5');
})
