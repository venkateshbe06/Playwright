//Assertion

import {test,expect, Locator} from '@playwright/test'
import { TIMEOUT } from 'node:dns'

test('assertion validation', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/')
    await expect(page).toHaveTitle('Automation Testing Practice')

    await expect(page.locator('#name')).toBeVisible() // type 1 (use 1 time)

    const input : Locator = await page.locator('#name')
    await expect(input).toBeVisible()

    await expect(page.locator('//button[text()="START"]')).toBeEnabled()
    // await expect(page.locator('//button[text()="START"]')).toBeDisabled()

    const box : Locator = await page.locator('#sunday')
    await box.check()
    await expect(box).toBeChecked()
    await expect(page.locator('//h3[@itemprop="name"]')).toHaveText('Data Entry Form')
    await expect(page.locator('.description')).toContainText('Playwright')
    const locator = page.locator('#country')
    await locator.selectOption(['usa', 'india'])
    await expect(locator).toHaveValues([/usa/, /india/])
    await page.waitForTimeout(3000)

})