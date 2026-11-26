import {test} from '@playwright/test';
import {LoginPage} from '../PageClass/loginPage';
import d from "../testData/data.json";
import dd from "../testData/datadriven.json";

import { reader } from "../Utils/ExcelReader";

test(`Single Datadriven testing ${d.UN} and ${d.pwd}`, async ({page}) => {
    const loginobj = new LoginPage(page);
    await loginobj.navigate(d.Url);
    await loginobj.loginfunc(d.UN, d.pwd);
    await loginobj.loginValidate();
})

//using json file
for ( const d1 of dd) {
    test(`Multiple Datadriven testing ${d1.UN} and ${d1.pwd}`, async ({page}) => {
        const loginobj = new LoginPage(page);
        await loginobj.navigate(d.Url);
        await loginobj.loginfunc(d1.UN, d1.pwd);
        await loginobj.loginValidate();
    })
}

// using excel file
const Edata = reader();
for (const d2 of Edata) {
    test(`Excel Datadriven testing ${d2.UserName} and ${d2.Password}`, async ({page}) => {
        const loginobj = new LoginPage(page);
        await loginobj.navigate(d.Url);
        await loginobj.loginfunc(d2.UserName, d2.Password);
        await loginobj.loginValidate();
    })
}