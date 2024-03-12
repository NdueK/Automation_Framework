import { Page, expect } from "@playwright/test"

export default class HomePage {

    private readonly service_title = "Service";

    constructor(private page: Page){

    }

    async service_title_is_visible(){

        await expect(this.page.getByTitle(this.service_title)).toBeVisible({timeout: 15000});
    }
}