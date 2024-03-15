import { test } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import { encrypt, decrypt } from "../utils/CryptojsUtil";
import { encryptEnvFile } from "../utils/EncryptEnvFile";


test("test01", async({page})=>{ 

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.enter_username(process.env.userid!);
    await loginPage.enter_password(process.env.password!);
    const homePage = await loginPage.clickLoginButton();

    await homePage.service_title_is_visible();


});

test("Simple env test", async({page})=>{ 
 
    console.log(process.env.NODE_ENV);
    console.log(process.env.userid);
    console.log(process.env.password);
    
});

test("Encrypted, Decrypted", async({page})=>{ 
 
    encryptEnvFile();
});