import { Locator, Page, expect } from "@playwright/test";

export class inventoryPage {
    //Locators
    page : Page;
    productTitle : Locator;
    addToCartBtn : Locator;
    removeBtn   : Locator;

    constructor(page : Page){
        this.page = page;
        this.productTitle = page.getByText("Sauce Labs Backpack");
        this.addToCartBtn = page.locator('[id="add-to-cart-sauce-labs-backpack"]');
        this.removeBtn = page.getByRole("button", {name : "Remove"});        
    }


    //Reuseable Methods
    async validateProduct(){
        await expect(this.productTitle).toBeVisible();
        await this.addToCartBtn.click();
        await expect(this.removeBtn).toBeVisible();
    }
}
