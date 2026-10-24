import{chromium, test} from '@playwright/test';



test('Lead using CSS Selector', async({page}) => {

await page.goto('https://leaftaps.com/opentaps/control/main')
await page.waitForTimeout(10000)
await page.getByRole('textbox', { name: "USERNAME" }).fill('democsr2');
await page.getByRole('textbox', { name: "PASSWORD" }).fill('crmsfa');
await page.locator('input[type="submit"]').click();
await page.getByRole('link', {name : "CRM/SFA"}).click();
await page.waitForTimeout(5000)
await page.getByRole('link', { name: "Leads" }).click();
await page.getByRole('link', {name: "Create Lead"}).click();
await page.locator('input[name ="companyName"]').nth(1).fill("Firsr Company");
await page.locator('input[name = "firstName"]').nth(2).fill("Muthu Narayani")
await page.locator('input[name = "lastName"]').nth(2).fill("C N")
await page.locator('input[name= "personalTitle"]').fill("Mrs. ")
await page.locator('input[name= "generalProfTitle"]').fill("Autoation Testing")
await page.locator('input[name= "annualRevenue"]').fill("5L")
await page.locator('input[name= "departmentName"]').fill("IT")

const dropDown =await page.locator('select[name = "dataSourceId"]')

for(let i=0;i<await dropDown.count();i++)

    {
  
 const value = await dropDown.selectOption({index:i})
await console.log("Source Name is :" + await dropDown.nth(i).innerText() )
    }
await page.locator('input[name = "primaryPhoneNumber"]').nth(3).fill("876543321")
await page.locator('input[name= "submitButton"]').click();

})