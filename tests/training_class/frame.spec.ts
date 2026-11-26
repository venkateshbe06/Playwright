import {test, expect} from "@playwright/test";

test('iframe using src', async ({page}) => {
    await page.goto('https://letcode.in/frame')
    // gateway to access frame source
    const frm : any = await page.frame({url : 'https://letcode.in/frameui'})
    await frm.locator('//input[@name="fname"]').fill('Venkatesh')
    frm.fill('Venkatesh')
    const cnt = await page.frames()
    console.log(cnt.length);
    await page.waitForTimeout(3000)
})


test('iframe using attribute', async ({page}) => {
    await page.goto('https://letcode.in/frame')
    const frame_source = page.frameLocator('#firstFr')
    frame_source.locator('//input[@name="fname"]').fill("Srihari")
    await page.waitForTimeout(3000)
})