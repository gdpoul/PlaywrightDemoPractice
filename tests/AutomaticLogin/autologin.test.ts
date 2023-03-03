import {test} from "@playwright/test";

test("Skip Login", async({browser})=>{

    const context=await browser.newContext({
        storageState: "./loginorangehrm.json"
    })

    const page=await context.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/");


})