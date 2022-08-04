export class WomenPage {

    static openWomenCategory() {
        cy.get('#block_top_menu').contains("Women").click();
    }

    static checkIfWomenCategoryIsOpen() {
        cy.url().should('eq', 'http://automationpractice.com/index.php?id_category=3&controller=category');
    }

    static addElementToCartById(productId) {
        cy.get(".product_list > :nth-child(" + productId + ")").contains('Add to cart').click();
    }

    static clickContinueShopping() {
        cy.wait(6000);
        cy.get('.continue').contains('Continue shopping').click();
    }

    static clickProccedShopping() {
        cy.wait(6000);
        cy.get('.button-medium').contains("Proceed").click();
    }

    static checkIfShoppinCartSummaryIsOpen() {
        cy.url().should('eq', 'http://automationpractice.com/index.php?controller=order');
    }
}