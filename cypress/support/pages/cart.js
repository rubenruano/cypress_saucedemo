import Checkout from "./checkout";

class Cart {
  getPageTitle(index) {
    return cy.get(`.header_secondary_container`).invoke("text");
  }

  clickContinueShopping() {
    cy.get(`[data-test="continue-shopping"]`).click();
  }

  clickGoToCheckout() {
    cy.get(`[data-test="checkout"]`).click();

    return new Checkout();
  }
}

export default Cart;
