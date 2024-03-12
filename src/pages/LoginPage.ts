import { Page } from "@playwright/test"
import HomePage from "./HomePage";

export default class LoginPage{

    private readonly username_input = "#username";
    private readonly password_input = "#password";
    private readonly login_button = "#Login";

    constructor(private page: Page){

    }

    async navigateToLoginPage() {
        await this.page.goto('/');
    };

    async enter_username(username: string){
        await this.page.locator(this.username_input).fill(username);
    };

    async enter_password(password: string){
        await this.page.locator(this.password_input).fill(password);
    };

    async clickLoginButton(){
        await this.page.locator(this.login_button).click()
        .catch((error) => {
            console.log(`Error clicking login button: ${error}`);
            throw error; // rethrow the error if needed
        });

        const homePage = new HomePage(this.page);
        return homePage;
    };

}