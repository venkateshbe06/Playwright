//class

import { Locator, Page, expect } from "@playwright/test";

export class LoginPage{
    //Locators
    username : Locator;
    password : Locator;
    loginBtn : Locator;
    errorMsg : Locator;
    terms : Locator;
    page : Page;

    constructor (page : Page){
        this.page = page;
        this.username = page.locator("#username");
        this.password = page.locator("#password");
        this.loginBtn = page.getByRole("button", {name : "Sign In"});
        this.terms = page.locator("#terms")
        this.errorMsg = page.getByTestId('//div[@class="alert alert-danger col-md-12"]')

    }

    //Reuseable Methods
    async navigate(url : string){
        await this.page.goto(url)
    }

    // async loginfunc(username : string, password : string){
    //     await this.username.fill(username);
    //     await this.password.fill(password);
    //     await this.loginBtn.click();        
    // }

    async enter_username(username : string){
        await this.username.fill(username);      
    }

    async enter_password(password : string){
        await this.password.fill(password);  
    }

    async check_Terms(){
        await this.terms.click();        
    }

    async loginBtn_Click(){
        await this.loginBtn.click();        
    }

    async loginValidate(){
        await expect(this.page).toHaveURL(/shop/);
    }
}