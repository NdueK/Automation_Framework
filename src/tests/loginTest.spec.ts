import { test } from "@playwright/test";
import LoginPage from "../pages/LoginPage";

test("test01", async({page})=>{ 

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.enter_username("ndue@krasniqi.com");
    await loginPage.enter_password("mars2024");
    const homePage = await loginPage.clickLoginButton();

    await homePage.service_title_is_visible();


});