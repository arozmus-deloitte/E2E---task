/// <reference types="cypress" />
import { MainPage } from "../page_objects/main-page"
import { ShoppingCartPage } from "../page_objects/shopping_cart-page";
import { WomenPage } from "../page_objects/women-page"

context('e-shop go to', () => {

  beforeEach(() => {
    MainPage.openAutomationPracticePage();
  })

  /*Fourth task*/
  describe('Adding to cart from json', () => {
    let data;
    before(() => {
      cy.fixture("products").then((productData) => {
        data = productData;
      })
    })

    it('Should add 2 products from json to cart', () => {
      WomenPage.openWomenCategory();
      WomenPage.checkIfWomenCategoryIsOpen();
      WomenPage.addElementToCartById(data[0].id);
      WomenPage.clickContinueShopping();
      WomenPage.addElementToCartById(data[1].id);
      WomenPage.clickProccedShopping();
      WomenPage.checkIfShoppinCartSummaryIsOpen();
      ShoppingCartPage.checkIfProductsPriceIsCorrect(1, "$" + data[0].price.toFixed(2));
      ShoppingCartPage.checkIfProductsPriceIsCorrect(2, "$" + data[1].price.toFixed(2));
      let total = data[0].price + data[1].price
      total = "$" + total.toFixed(2);
      ShoppingCartPage.checkIfTotalPriceIsCorrect(total);
    })
  })
})