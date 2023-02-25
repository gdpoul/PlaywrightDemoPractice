import {test} from "@playwright/test";



test("Download files", async ({ browser }) => {

    const context= await browser.newContext();
    const page= await context.newPage();
    await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo");
    await page.type("#textbox", "Like, Share, comment & subs");
    await page.click("id=create")
    const download = await Promise.all([
        page.waitForEvent("download"),
        page.click("id=link-to-download")
    ])
    const fileName = download[0].suggestedFilename()
    await download[0].saveAs(fileName);
    // const path = await download[0].path();
    // console.log(path);

})