/// <reference types="cypress" />
import { LoginPage } from "../page_objects/login-page";
import { MainPage } from "../page_objects/main-page"

context('e-shop go to', () => {

  beforeEach(() => {
    MainPage.openAutomationPracticePage();
  })

  /*First task*/
  describe('Logging in and out', () => {
    let data;
    before(() => {
      cy.fixture("login-data").then((loginData) => {
        data = loginData;
      })
    })

    it('should log in and log out', () => {
      data.forEach(data => {
        MainPage.clickSignInButton();
        LoginPage.checkIfAuthenticationPageIsOpen();
        LoginPage.inputAccountData(data.email,data.password)
        LoginPage.clickLogInButton();
        LoginPage.checkIfCorrectUserIsLoggedIn(data.name);
        MainPage.clickSignOutButton();
      });
    })
  })
})