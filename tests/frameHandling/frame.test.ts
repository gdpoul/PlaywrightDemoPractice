import {expect, test} from "@playwright/test";

test("Frame Handle", async({page})=>{
    await page.goto("https://letcode.in/frame");

    const frame= page.frame({name:"firstFr"});
    await frame?.fill("input[name='fname']","Ganesh");
    await frame?.fill("input[name='lname']","Poul");

    const innerframes= frame?.childFrames();
    console.log("No of inner frame :"+innerframes?.length);
    if(innerframes != null){
        await innerframes[1].fill("input[name='email']","gdpoul@gmail.com"); 
    }


    // if(frame !=null){
    //     await frame.fill("input[name='fname']","Ganesh");
    //     await frame.fill("input[name='lname']","Poul");
    // }
    // else throw new Error("No Such Frame"); 
})
