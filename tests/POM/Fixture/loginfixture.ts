import {test as base, Page} from '@playwright/test';
import { LoginPage } from '../PageClass/loginPage';
import d from '../testData/data.json';

type LoginFixture = {
    loginFix : Page;
}

export const Mytest = base.extend<LoginFixture>({
    loginFix : async({ page }, use) => {
        const loginobject = new LoginPage(page);
        await loginobject.navigate(d.Url);
        await loginobject.loginfunc(d.UN, d.pwd);
        await loginobject.loginValidate();
        use(page);
    }
})