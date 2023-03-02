import {chromium, firefox, test} from "@playwright/test";

test("Run Local Browser", async({})=>{

    const browser=await chromium.launch({
        headless:false,
        // channel:"chrome",
        executablePath:"C:/Program Files/Google/Chrome/Application/chrome.exe"
    })
    const page=await browser.newPage();
    page.goto("https://playwright.dev/");
})