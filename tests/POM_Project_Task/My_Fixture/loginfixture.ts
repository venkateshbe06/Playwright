import {test as base, Page} from '@playwright/test';
import { LoginPage } from '../Pageclass/loginPage';
import d from '../testData/data.json';

type LoginFixture = {
    loginFix : Page;
}

export const Mytest = base.extend<LoginFixture>({
    loginFix : async({ page }, use) => {
        const loginobject = new LoginPage(page);
        await loginobject.navigate(d.Url);
        await loginobject.enter_username(d.UN);
        await loginobject.enter_password(d.pwd);
        await loginobject.check_Terms();
        await loginobject.loginBtn_Click();
        await loginobject.loginValidate();
        use(page);
    }
})