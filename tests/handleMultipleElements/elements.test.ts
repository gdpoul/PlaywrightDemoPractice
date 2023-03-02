import {test} from "@playwright/test";

test("Multiple Element Test", async({page})=>{

    await page.goto("https://letcode.in/elements");
    // await page.fill("//input[@name='username']", "gdpoul");
    // await page.press("//input[@name='username']","Enter");

    const textbox=await page.$("//input[@name='username']");
    await textbox?.fill("gdpoul");
    await textbox?.press("Enter");

    // if(textbox!=null){
    //     textbox.fill("gdpoul")
    // }


    await page.waitForSelector("//div[@class='content']/descendant::a");
    const repository=await page.$$("//div[@class='content']/descendant::a");
    console.log(repository.length);

    // for(let i=0;i<repository.length;i++){
    //     const repo=await repository[i].innerText();
    //     console.log(repo);
        
    // }

    for(const repo of repository){       
        console.log(await repo.innerText());     
    }
    

})