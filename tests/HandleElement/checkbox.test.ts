import {chromium, expect, firefox, test} from "@playwright/test"


test("handle checkbox",async()=>{

    const browser= await firefox.launch();
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://demoqa.com/checkbox");

    // handle checkbox
    const homeCheckbox=await page.locator("//span[@class='rct-checkbox']");
    homeCheckbox.check();
    await expect(homeCheckbox).toBeChecked();
})


test("handle dropdown",async()=>{

    const browser= await chromium.launch();
    const context= await browser.newContext();
    const page= await context.newPage();
    await page.goto("https://www.globalsqa.com/samplepagetest/");

    // handle dropdown

   const experienceDropdown= await page.locator("select#g2599-experienceinyears");
   await experienceDropdown.selectOption("7-10");
})


