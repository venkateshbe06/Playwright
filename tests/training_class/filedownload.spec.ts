import { test, expect } from '@playwright/test'

test("File Download", async({page}) => {
    await page.goto("https://practice-automation.com/file-download/");
    const [download] =  await Promise.all([
        page.waitForEvent("download"),
        page.locator('a[href="#"]').click(),
    ])

    // print filename
    const fileDownloaded = download.suggestedFilename();
    console.log(`${fileDownloaded}`);

    // download
    await download.saveAs(`./tests/Downloadsfolder/${download.suggestedFilename()}`)
    await download.saveAs("./tests/Downloadsfolder/sampledownload.pdf")
    console.log("filedownloaded");
});


// --ui in cmd
// --debug in cmd  (or) page.pause() in script
// --trace=on in cmd or config.json