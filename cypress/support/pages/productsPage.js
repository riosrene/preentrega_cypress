export class ProductsPage {
    constructor() {
        this.productaddcart1 = '#whiteshoes';
        this.productaddcart2 = '#beigepants';
        this.messageAlert = '#closeModal';
        this.goShoppingCart = '#goShoppingCart'
    }

    clickAddtoCart1() {
        cy.get(this.productaddcart1).click();
    }

    clickAddtoCart2() {
        cy.get(this.productaddcart2).click();
    }

    clickShoppingCart() {
        cy.get(this.goShoppingCart).click();
    }

    clickMessageAlert() {
        cy.get(this.messageAlert).click();
    }

    
}