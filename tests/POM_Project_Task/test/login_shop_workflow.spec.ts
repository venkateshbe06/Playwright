import {test} from '@playwright/test';
import {LoginPage} from '../Pageclass/loginPage';
import {ShopPage} from '../Pageclass/shopPage';
import tdata from '../testData/data.json';
// import { Mytest } from '../Fixture/loginfixture';
import { Mytest } from '../My_Fixture/loginfixture';
import { waitForDebugger } from 'node:inspector';

// login
test("rahulshettyacademy_login", async({page}) => {
    const loginobj = new LoginPage(page);
    await loginobj.navigate(tdata.Url);
    await loginobj.enter_username(tdata.UN);
    await loginobj.enter_password(tdata.pwd);
    await loginobj.check_Terms();
    await loginobj.loginBtn_Click();
    await loginobj.loginValidate();
    await page.waitForTimeout(3000);
})

// shop url
test("rahulshettyacademy_shop", async({page}) => {
    const loginobj = new LoginPage(page);
    await loginobj.navigate(tdata.Url);
    await loginobj.enter_username(tdata.UN);
    await loginobj.enter_password(tdata.pwd);
    await loginobj.check_Terms();
    await loginobj.loginBtn_Click();
    await loginobj.loginValidate();
    // await page.waitForTimeout(5000);

    // const shopobj = new ShopPage(page);
    // await shopobj.add_to_cart_btn();
    // await shopobj.checkout_blue_button();
    // await shopobj.checkout_green_button();
    // await shopobj.enter_country();
    // await shopobj.checkbox_terms_and_conditions();
    // await shopobj.checkout_green_button();
    // await shopobj.order_message();
    // await page.waitForTimeout(3000);

    const shopobj = new ShopPage(page);
    await shopobj.add_to_cart_button();
    await shopobj.checkout_blue_button();
    await shopobj.checkout_green_button();
    await shopobj.enter_country();
    await shopobj.purchase_term_checkbox_button();
    // await page.waitForTimeout(2000);
    // await shopobj.purchase_terms_condition_close_button();
    await shopobj.purchase_button();
    // await shopobj.checkout_blue_button();
    await page.waitForTimeout(2000);
    await shopobj.order_message();


        
})


// fixtures for login scenario for all testcases - need to add
Mytest("Product Validate using custom fixture", async({loginFix}) => {
    // const loginobj = new LoginPage(page);

    const shopobj = new ShopPage(loginFix);
    await shopobj.add_to_cart_button();
    await shopobj.checkout_blue_button();
    await shopobj.checkout_green_button();
    await shopobj.enter_country();
    await shopobj.purchase_term_checkbox_button();  // why it is not working
    // await loginFix.waitForTimeout(2000);
    // await shopobj.purchase_terms_condition_close_button();
    await shopobj.purchase_button();

    // await shopobj.checkout_blue_button();
    await loginFix.waitForTimeout(2000);
    await shopobj.order_message();
    
})

//need to update fixture testcase  and full step testcase