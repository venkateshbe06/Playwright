import {test, expect, Locator} from '@playwright/test'

test ('radio_check', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.check('#male')
    await page.check('#female')
    await page.check('#sunday')
    await page.waitForTimeout(3000)
    await page.uncheck('#sunday')
})