import {test, expect, Locator} from '@playwright/test'


test('drop down using selectoption', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    const select : Locator =  await page.locator('#country')
    // await select.selectOption('india')
    // await select.selectOption({value : 'france'})
    // await select.selectOption({label : 'Japan'})
    // await select.selectOption({index : 7})
    await page.locator('#country').selectOption('India')
    await page.waitForTimeout(3000)
})
