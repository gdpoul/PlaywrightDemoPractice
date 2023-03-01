import {expect, test} from "@playwright/test";

test("Wizwgain",async({page})=>{

    await page.goto("https://bright-churros-b09fa2.netlify.app/#/pages/login");
    await page.fill("#mail","admin");
    await page.fill("#pw","admin");
    await page.click("//button[text()='Get Started']");
    await page.click("//a[@data-toggle='collapse']//p[contains(text(),'Events')]");

   const people= await page.locator("//p[text()='People']");
//    page.waitForLoadState();
   console.log(await people.textContent());
   
})