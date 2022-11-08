export class HomePage{
    constructor() {
        this.onlineshLink = '#onlineshoplink';
    }

    clickOnlineShLink() {
        cy.get(this.onlineshLink).click();
    }

}
