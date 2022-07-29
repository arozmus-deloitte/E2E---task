export class LoginPage {

    static openAutomationPracticeSignInPage() {
        cy.visit("http://automationpractice.com/index.php?controller=authentication&back=my-account");
    }

    static inputAccount(loginEmail, loginPassword) {
        cy.get('input#email').type(loginEmail);
        cy.get('input#passwd').type(loginPassword);
    }

    static clickLogInButton() {
        cy.get('#SubmitLogin').click();
    }

    static checkIfMyAccountIsOpen() {
        cy.get('.page-heading').contains("My account");
    }
}