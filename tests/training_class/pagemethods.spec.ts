import {test, expect, Locator} from '@playwright/test'
import { log } from 'console'

test ('page methods', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    // await page.locator('#name').fill('venkaesh') //type 1
    await page.fill('#name', 'Venkatesh')
    await page.click('//button[@name="start"]')
    // await page.close()
    await page.goBack()
    await page.goForward()
    await page.reload()

    console.log(await page.url())
    console.log(await page.title())
    const box : Locator = await page.locator('#sunday')
    await box.check()
    await box.uncheck()
    // await page.locator('#country').selectOption('india') // type 1
    await page.selectOption('#country', 'india') // type 2
    await page.waitForTimeout(3000)
})
