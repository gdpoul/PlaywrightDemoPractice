import {chromium, firefox, test, webkit} from "@playwright/test";


test("Open Chromium", async ()=>{

   const browser= await chromium.launch();
   const context=await browser.newContext();
   const page=await context.newPage();
   await page.goto("https://opensource-demo.orangehrmlive.com/");

   // 
   await page.getByPlaceholder("Username").fill("Admin");
   await page.getByPlaceholder("Username").fill("Admin");
   await page.locator("//button[text()=' Login ']").click();

})