const {test, expect}=require ('@playwright/test')

test('AssertionsTest', async ({page})=>{
await page.goto("https://demo.nopcommerce.com/register");
await expect(page).toHaveURL("https://demo.nopcommerce.com/register");

await expect(page).toHaveTitle("nopCommerce demo store. Register");

const logoelement=await page.locator('.header-logo');
await expect(logoelement).toBeVisible();
const seachStoreBox=await page.locator('#small-searchterms');
await expect(seachStoreBox).toBeEnabled();

const maleRadioButton=await page.locator('#gender-male');
await maleRadioButton.click();
await expect(maleRadioButton).toBeChecked();

const newslettercheck=await page.locator('#Newsletter');
await expect(newslettercheck).toBeChecked();

const regButton=await page.locator('#register-button');

await expect(regButton).toHaveAttribute('type','submit');

//toHaveValue()
const emailfild=await page.locator('#Email');
await emailfild.fill('test@123');
await expect(emailfild).toHaveValue('test@123'); 

//toHaveCount--



}


)
