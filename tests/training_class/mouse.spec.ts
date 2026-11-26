// Mouse Actions

import {test, expect, Locator} from "@playwright/test";

test('Mouse Actions', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.getByText('Point Me').hover()
    const drg : Locator = await page.locator('div#draggable')
    const drp : Locator = await page.locator('div#droppable')
    await drg.dragTo(drp)
    await page.mouse.wheel(0,500)
    await page.mouse.wheel(0,-500)
    await page.getByText('Copy Text').dblclick()
    await page.getByText('New Tab').click()
    // await page.click(Locator, {button:'right'})
    await page.waitForTimeout(3000)
})