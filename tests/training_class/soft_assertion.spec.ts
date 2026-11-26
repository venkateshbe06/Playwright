// soft assertion
import {test, expect} from '@playwright/test'

test('soft assertion', async({page}) => {
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await expect.soft(page.getByAltText('companybranding')).toBeVisible()
await expect.soft(page.getByAltText('company-branding')).toBeVisible()
await page.getByPlaceholder('Username').fill('Admin')
await page.getByPlaceholder('Password').fill('admin123')
// await page.getByRole('button', {type:"submit"}).click()
await page.getByRole('button', {name:"submit"}).click()
await page.waitForTimeout(2000)

})
