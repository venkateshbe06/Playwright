import { test, expect } from "@playwright/test";

test('simple alert', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('dialog', async(dialog) => {
        expect(dialog.type()).toBe('alert')
        expect(dialog.message()).toBe('I am an alert box!')
        await dialog.accept()
    })

    await page.locator('//button[text()="Simple Alert"]').click()
})



