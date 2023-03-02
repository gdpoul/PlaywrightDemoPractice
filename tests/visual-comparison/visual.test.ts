import {expect, test} from "@playwright/test"

test("Visual Test OrangeHrm Login Page", async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/");
    await page.waitForLoadState("domcontentloaded");
    expect(await page.screenshot({fullPage:true})).toMatchSnapshot("orangeloginpage.png");
})

test("Visual test playwright.dev page",async({page})=>{

    await page.goto("https://playwright.dev/");
    await page.screenshot({path:"./screenshot/playwright.png", fullPage:true});
    expect(await page.screenshot({fullPage:true})).toMatchSnapshot("./screenshot/playwright.png");
})