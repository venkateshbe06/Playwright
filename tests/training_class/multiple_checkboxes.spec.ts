import {test, expect} from '@playwright/test'

test ('multiple_check', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    const mul_checkbox = ['#monday', '#tuesday', '#wednesday']
    for (const day of mul_checkbox){
    await page.locator(day).check()
    await page.waitForTimeout(2000)
    }    
})