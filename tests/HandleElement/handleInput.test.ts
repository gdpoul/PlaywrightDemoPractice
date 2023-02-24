import {chromium, expect, test} from "@playwright/test"


test("handle element",async()=>{

   const browser= await chromium.launch();
   const context=await browser.newContext();
   const page=await context.newPage();
   await page.goto("https://opensource-demo.orangehrmlive.com/");

   // const logo=page.locator("hjghkldffb");
   // logo.isVisible();
   // expect(await page.locator("").isVisible()).toBeTruthy();
//    expect(await page.url()).toBe("https://opensource-demo.orangehrmlive.com/")
   // input 
   await page.fill("//input[@placeholder='Username']","Admin");
   await page.fill("//input[@name='password']","admin123");
   await page.click("//button[text()=' Login ']");

   
})