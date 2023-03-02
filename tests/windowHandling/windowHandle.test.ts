import {test} from "@playwright/test";

test("OrangeHrm Window Handle", async({context})=>{

  const page=await context.newPage();
   await page.goto("https://opensource-demo.orangehrmlive.com/");

   const [page2]=await Promise.all([
    context.waitForEvent("page"),
    await page.click("//a[contains(@href,'linkedin')]")
   ])
 
//    console.log(page2.url());

   await page2.fill("//input[@name='email-or-phone']","gdpoul@gmail.com");

   // bring control back to parent page/window
   await page.bringToFront();
   await page.fill("input[name='username']","Admin");
   

})