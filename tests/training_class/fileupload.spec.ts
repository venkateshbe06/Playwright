import {test, expect, Locator} from "@playwright/test";

test('Upload files', async({page}) => {
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    await page.locator('#filesToUpload').setInputFiles('c:/Users/ADMIN/Documents/notes.txt')
    await page.waitForTimeout(3000)
    await expect(page.locator('//ul[@id="fileList"]/li')).toHaveText('notes.txt')
    await expect(page.locator('//ul[@id="fileList"]/li')).toBeVisible()
    await page.locator('#filesToUpload').setInputFiles(['c:/Users/ADMIN/Documents/file1.txt','c:/Users/ADMIN/Documents/file2.txt'])
    await page.locator('#filesToUpload').setInputFiles([])
    await page.waitForTimeout(3000)
    

    // const no_of_files : any = page.locator('//ul[@id="fileList"]/li')
    // console.log(no_of_files)
})
