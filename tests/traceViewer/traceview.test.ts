import {expect, test} from "@playwright/test";

test("View Trace", async({context})=>{

    await context.tracing.start({
        screenshots:true,
        snapshots:true
    })
    const page= await context.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/");

    await page.fill("//input[@placeholder='Username']","Admin");
    await page.fill("//input[@placeholder='Password']","admin123");
    await page.click("button[type='submit']");

    await page.click("span[class='oxd-userdropdown-tab']");
    await page.click("//a[text()='Logout']");

    page.waitForTimeout(3000);

    await context.tracing.stop({
        path:"trace.zip"
    })
})
