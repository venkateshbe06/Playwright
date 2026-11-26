// Built-in locator

import {test, expect} from '@playwright/test'

test('build-in locator', async({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page.getByAltText('company-branding')).toBeVisible()
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.getByRole('button', {type : 'submit'}).click()
    await page.waitForTimeout(5000)
    await expect(page.getByText('My Actions')).toBeVisible()
    await page.getByTitle('Help')
    // await page.getByTestId('')
    await page.waitForTimeout(5000)
})