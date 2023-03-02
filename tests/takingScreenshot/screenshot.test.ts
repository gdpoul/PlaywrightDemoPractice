import {test} from "@playwright/test";

test("full page screenshot", async({page})=>{

   await page.goto("https://playwright.dev/");
   
   await page.screenshot({path:"./screenshot/sc1.png", fullPage:true});
})

test("Element screenshot", async({page})=>{

    await page.goto("https://playwright.dev/");

    const ele=await page.$("(//div[@class='container'])[1]");
    await ele?.screenshot({path:"header.png"});
 })