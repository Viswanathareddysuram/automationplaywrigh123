//const {test, expect} =require('@playwright/test')

import {test,expect} from "@playwright/test"
import { stat } from "fs";

test("Handle dropdowns", async ({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");


//multiple ways select drop downs
//await page.locator('#country').selectOption({label:'India'}); //label/visibale text
//await page.locator('#country').selectOption("India");// visiable text
//await page.locator('#country').selectOption({value:'uk'});// value attribute
//await page.locator('#country').selectOption({index: 1});//  index: 1
//await page.selectOption('#country','India');


//Assertions
//1. check number of options in dropdwon
//const options=await page.locator('#country option')
//await expect(options).toHaveCount(10);

//2. check numberof options in dropdown -approche2
//const options=await page.$$('#country option');
//console.log("Number of Options :", options.length)
//await expect(options.length).toBe(10);

//3.check presence of value in drop down

//const content=await page.locator('#country').textContent();
//await expect(content?.includes("India")).toBeTruthy();

//4. check presence of value in the dropdown =-approche 2
const options=await page.$$('#country');
let status=false;

for(const option of options){
   // console.log(await option.textContent());

    let value=await option.textContent();
    if(value.includes('France')){
    status=true;
    break;
    }

    expect(status).toBeTruthy();
}
// 5. select option from dropdwon using loop

const option=await page.$$('#country');
let status1=false;

for(const option of options){
   // console.log(await option.textContent());

    let value1=await option.textContent();
    if(value1.includes('India')){
        await page.selectOption('#country', value1)
    
    break;
    }

    


await page.waitForTimeout(5000);





})