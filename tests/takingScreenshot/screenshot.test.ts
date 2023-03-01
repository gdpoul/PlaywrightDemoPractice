import {test} from "@playwright/test";

test("full page screenshot", async({page})=>{

   await page.goto("https://playwright.dev/");
   await page.screenshot({path:"screenshot1.png", fullPage:true})
})

test("Element screenshot", async({page})=>{

    await page.goto("https://playwright.dev/");
    const logos=await page.$("(//div[@id='docusaurus_skipToContent_fallback']//img)[1]");
    await logos?.screenshot({path:"browserLogo.png"});
 })