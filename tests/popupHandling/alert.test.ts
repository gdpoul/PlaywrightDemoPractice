import {expect, test} from "@playwright/test";

test("Simple Alert", async({page})=>{
    await page.goto("https://letcode.in/alert");
    const simpleAlert=await page.$("#accept");
    page.on("dialog",(diolog)=>{
        console.log("alert message :"+diolog.message());
        diolog.accept();
        diolog.message();
    })
    await simpleAlert?.click();
    // await page.click("#accept");
})

test("Confirm Alert",async({page})=>{
    await page.goto("https://demoqa.com/alerts");
    page.on("dialog",(alert)=>{
        console.log("alert message :"+alert.message());
        alert.dismiss(); 
    })
    await page.click("#confirmButton");
    expect(await page.locator("#confirmResult")).toContainText("Cancel");
})


test("Prompt Alert", async({page})=>{
    await page.goto("https://demoqa.com/alerts");
    page.on("dialog",(prompt)=>{
        console.log("prompt message is :"+prompt.message());
        console.log("defalut value :"+prompt.defaultValue());
        prompt.accept("Hi I am Ganesh");
        console.log("Enter value :"+prompt.defaultValue());       
    })
    await page.click("//button[@id='promtButton']");
})