export class LoginPage {

    static checkIfAuthenticationPageIsOpen() {
        cy.url().should('eq', 'http://automationpractice.com/index.php?controller=authentication&back=my-account');
    }

    static inputAccountData(loginEmail, loginPassword) {
        
        cy.get('#email').type(loginEmail);
        cy.get('#passwd').type(loginPassword);
    }

    static clickLogInButton() {
        cy.get('#SubmitLogin').click();
    }

    static checkIfCorrectUserIsLoggedIn(userName) {
        cy.get('.account').should('have.text', userName);
    }

}