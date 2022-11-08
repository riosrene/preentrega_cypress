export class ShoppingCartPage {
    
    nameProduct1() {
        cy.xpath("//p[@name='White Shoes']").should('contain', 'White Shoes');
    }

    priceProduct1() {
        cy.xpath("//p[@name='30']").should('contain', '30');
    }

    nameProduct2() {
        cy.xpath("//p[@name='Beige Shorts']").should('contain', 'Beige Shorts');
    }

    priceProduct2() {
        cy.xpath("//p[@name='19']").should('contain', '19');
    }

    btnShowTotalPrice() {
        cy.xpath("//button[contains(.,'Show total price')]").click();
    }
    
    totalPrice() {
        cy.xpath("//b[contains(.,'49')]")
    }

}