import  {test,expect} from '@playwright/test';

test("multiple dropdown", async ({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

//1. select multiple options from multi select dropdown
//await page.selectOption("//label[text()='Colors:']",["Blue","Red","Yellow"]);
//await page.waitForTimeout(5000);

//Assertions
// check number of options in dropdown
//const options=await page.locator('#colors option');
//await expect(options).toHaveCount(5);

//2. check number of options in dropdwon using JS Array
//const options=await page.$$("#colors option");
//console.log("Number of options : ",options.length);
//another approche we can count
//await expect(options.length).toBe(5);



const content=await page.locator("#colors").textContent();
await expect(content?.includes("Blue")).toBeTruthy();

})

