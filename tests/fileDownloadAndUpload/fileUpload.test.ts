import {test} from "@playwright/test";

test("Upload files", async ({ page }) => {

    await page.goto("https://blueimp.github.io/jQuery-File-Upload/")

    // await page.setInputFiles("input[type='file']",
    //     ["uploadItems/apple.png", "uploadItems/mango.png"]);

    const [uploadFiles] = await Promise.all([
        page.waitForEvent("filechooser"),
        page.click("input[type='file']")
    ])
    const isMultiple = uploadFiles.isMultiple();
    console.log(isMultiple);
    uploadFiles.setFiles(
        ["uploadItems/apple.png",
            "uploadItems/mango.png"]
    )




    await page.waitForTimeout(3000);
})