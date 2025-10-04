import{test,expect, Locator} from "@playwright/test"
test('Verify playwright inbuilt locator',async({page})=>{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

// page.getByAltText()
let LOGO:Locator=page.getByAltText("company-branding")
await expect(LOGO).toBeVisible();

// page.getByPlaceholder()
await page.getByPlaceholder("Username").fill("Admin")
await page.getByPlaceholder("Password").fill("admin123")

//page.getByRole()
await page.getByRole('button',{name:'Login'}).click();

// page.getByText()
await expect(page.getByText("John Davies")).toBeVisible();

});
