/// <reference types="cypress" />
import { LoginPage } from "../page_objects/login-page";
import { MainPage } from "../page_objects/main-page"
import { ShoppingCartPage } from "../page_objects/shopping_cart-page";
import { WomenPage } from "../page_objects/women-page"

context('e-shop go to', () => {

  beforeEach(() => {
    MainPage.openAutomationPracticePage();
  })

  describe('Logging in and out', () => {
    let data;
    before(() => {
      cy.fixture("login-data").then((loginData) => {
        data = loginData;
      })
    })

    it('should log in and log out', () => {
      for (let i = 0; i < Object.keys(data).length; i++) {
        MainPage.clickSignInButton();
        LoginPage.checkIfAuthenticationPageIsOpen();
        LoginPage.inputAccountData(data[i].email,data[i].password)
        LoginPage.clickLogInButton();
        LoginPage.checkIfCorrectUserIsLoggedIn(data[i].name);
        MainPage.clickSignOutButton();
      }
    })
  })

  // describe('Adding to cart', () => {
  //   it('should add element to cart', () => {
  //     WomenPage.openWomenCategory();
  //     WomenPage.checkIfWomenCategoryIsOpen();
  //     const price1 = WomenPage.addElementToCart(3);
  //     WomenPage.clickContinueShopping();
  //     const price2 = WomenPage.addElementToCart(2);
  //     WomenPage.clickProccedShopping();
  //     WomenPage.checkIfConfirmationIsOpen();
  //     ShoppingCartPage.searchFirstPrice(1, price1);
  //     ShoppingCartPage.searchFirstPrice(2, price2);
  //     let total = Number(price1.substring(1)) + Number(price2.substring(1))
  //     total = "$" + total.toFixed(2);
  //     ShoppingCartPage.searchTotalPrice(total);
  //   })
  // })
})