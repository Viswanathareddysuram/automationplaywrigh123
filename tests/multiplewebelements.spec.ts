import {test, expect} from "@playwright/test";

test('locators' , async ({page})=>{
    await page.goto("https://www.demoblaze.com/index.html");

   const links=await page.$$('a');

   for(const link of links){
   const textlinks=await link.textContent();
    console.log(textlinks);
    

   }

})