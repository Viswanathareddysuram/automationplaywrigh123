const {test, expect}=require('@playwright/test')

test('soft assertions', async ({page})=>{

    await page.goto('https://demo.nopcommerce.com/login');
    //hard assertions
  //  await expect(page).toHaveTitle('nopCommerce demo store. Login');
    //await expect(page).toHaveURL('https://demo.nopcommerce.com/login');
   // await expect(page.locator("//img[@alt='nopCommerce demo store']")).toBeVisible();


    //soft assertions
    await expect.soft(page).toHaveTitle('nopCommerce demo store. Login 123');
    await expect.soft(page).toHaveURL('https://demo.nopcommerce.com/login');
    await expect.soft(page.locator("//img[@alt='nopCommerce demo store']")).toBeVisible();


})