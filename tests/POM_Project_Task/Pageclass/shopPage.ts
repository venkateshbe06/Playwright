//class

import { Locator, Page, expect } from "@playwright/test";

export class ShopPage{
    //Locators

    add_to_cart_btn : Locator;
    checkout_blue_btn : Locator;
    checkout_green_btn : Locator;
    country : Locator;
    purchase_term_checkbox_btn : Locator;
    purchase_terms_condition_close_btn : Locator;
    purchaseBtn : Locator;
    ordermsg : Locator;
    page : Page;

    constructor (page : Page){
        this.page = page;
        this.add_to_cart_btn = page.locator("app-card:nth-child(2) button")
        
        // this.checkout_blue_btn = page.locator("nav-link btn btn-primary")
        // this.checkout_blue_btn = page.locator("nav-item active")
        this.checkout_blue_btn = page.locator("li.nav-item.active")
        
        // this.checkout_green_btn = page.locator("btn btn-success")
        this.checkout_green_btn = page.getByRole("button", {name : "Checkout"});

        this.country = page.locator("#country")
        // this.purchase_term_checkbox_btn = page.locator('#checkbox2');
        // this.purchase_term_checkbox_btn = page.locator('//input[@id="checkbox2"]');
        // this.purchase_term_checkbox_btn = page.locator('//input[@type="checkbox"]');
        this.purchase_term_checkbox_btn = page.locator('//input[@type="checkbox"]/following-sibling::label');
        
        this.purchase_terms_condition_close_btn = page.locator('//button[@class="btn btn-info"]')
        // this.purchaseBtn = page.getByRole("button", {name : "Purchase"});
        this.purchaseBtn = page.locator('//input[@type="submit" and @value="Purchase"]');
        // this.ordermsg = page.locator("alert alert-success alert-dismissible")
        // this.ordermsg = page.locator("alert.alert-success.alert-dismissible")
        this.ordermsg = page.locator('//div[@class="alert alert-success alert-dismissible"]')

    }

    //Reuseable Methods
    async add_to_cart_button(){
        await this.add_to_cart_btn.click();

    }
    async checkout_blue_button(){
        await this.checkout_blue_btn.click()
    }

    async checkout_green_button(){
        await this.checkout_green_btn.click()
    }

    async enter_country(){
        await this.country.fill("triplicane")
    }

    async purchase_term_checkbox_button(){
        await this.purchase_term_checkbox_btn.check()
    }

    async purchase_terms_condition_close_button(){
        await this.purchase_terms_condition_close_btn.click();
    }

    async purchase_button(){
        await this.purchaseBtn.click();
    }

    async order_message(){
        await expect(this.ordermsg).toBeVisible();
    }
}