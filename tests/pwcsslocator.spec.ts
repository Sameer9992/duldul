import{test,expect,Locator} from "@playwright/test"
// Launch the URL
test("Verify csselector",async({page})=>{
await page.goto('https://demowebshop.tricentis.com/');
// logo (CSS locator)
//await expect(page.getByAltText("Tricentis Demo Web Shop")).toBeVisible();
const reletiveLogo:Locator=page.locator('img[alt="Tricentis Demo Web Shop"]')
await expect(reletiveLogo).toBeVisible()

// Products containing "computer" in href attribute 
let Products:Locator=page.locator('h2>a[href*="computers"]');
const Productscount:number=await Products.count();
expect(Productscount).toBeGreaterThan(0);

console.log("First Computer product:",await Products.first().textContent());
console.log("N-th Computer product:",await Products.nth(1).textContent());

let productTitles:string[]=await Products.allTextContents();
console.log("All computer related product names:", productTitles);

for (let pt of productTitles)
{
console.log(pt)
}

});