import {test} from '@playwright/test';
import {LoginPage} from '../PageClass/loginPage';
import {inventoryPage} from '../PageClass/inventoryPage';
import tdata from '../testData/data.json';
import { Mytest } from '../Fixture/loginfixture';

test("Swag Labs", async({page}) => {
    const loginobj = new LoginPage(page);
    await loginobj.navigate(tdata.Url);
    await loginobj.loginfunc(tdata.UN, tdata.pwd);
    await loginobj.loginValidate();
})

test("Product Validate", async({page}) => {
    const loginobj = new LoginPage(page);
    await loginobj.navigate(tdata.Url);
    await loginobj.loginfunc(tdata.UN, tdata.pwd);
    await loginobj.loginValidate();
    const prodobj = new inventoryPage(page);
    await prodobj.validateProduct();
})

Mytest("Product Validate using custom fixture", async({loginFix}) => {
    // const loginobj = new LoginPage(page);
    // await loginobj.navigate(tdata.Url);
    // await loginobj.loginfunc(tdata.UN, tdata.pwd);
    // await loginobj.loginValidate();

    // const prodobj = new inventoryPage(page);
    const prodobj = new inventoryPage(loginFix);
    await prodobj.validateProduct();
})