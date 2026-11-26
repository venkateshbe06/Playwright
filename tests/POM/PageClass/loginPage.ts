//class

import { Locator, Page, expect } from "@playwright/test";

export class LoginPage{
    //Locators
    username : Locator;
    password : Locator;
    loginBtn : Locator;
    errorMsg : Locator;
    page : Page;

    constructor (page : Page){
        this.page = page;
        this.username = page.locator("#user-name");
        this.password = page.locator("#password");
        this.loginBtn = page.getByRole("button", {name : "Login"});
        this.errorMsg = page.getByTestId('error')

    }

    //Reuseable Methods
    async navigate(url : string){
        await this.page.goto(url)
    }

    async loginfunc(username : string, password : string){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginBtn.click();        
    }
    async loginValidate(){
        await expect(this.page).toHaveURL(/inventory.html/);
    }
}


