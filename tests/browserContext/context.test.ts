import {chromium, test}  from "@playwright/test";


test("Context Test", async()=>{

    const browser =await chromium.launch();
    const context1=await browser.newContext();
    const context2=await browser.newContext();
    const page1=await context1.newPage();
    const page2=await context2.newPage();
    page1.goto("https://www.google.com");    
    page2.goto("https://www.facebook.com");    
  

})