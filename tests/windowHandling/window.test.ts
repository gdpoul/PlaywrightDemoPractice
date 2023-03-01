import {expect, test} from "@playwright/test";

test("Single Page Handle ", async({context})=>{
    const page=await context.newPage();
    await page.goto("https://letcode.in/windows");

   const [newWindow]= await Promise.all([
     context.waitForEvent("page"),
     await page.click("#home")
    ])
    // newWindow.waitForLoadState();  
    expect(newWindow.url()).toBe("https://letcode.in/test");
    await newWindow.click('"Log in"');
    await newWindow.fill("//input[@name='email']","abc@gmail.com");
    await newWindow.fill("input[name='password']","Abcd");

    await page.bringToFront();
    await page.click("(//a[@class='navbar-item'])[1]");
})