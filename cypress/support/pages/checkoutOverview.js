import ThankyouPage from "./thankyou";

class CheckoutOverview {
  getTitle() {
    return cy.get(".title").invoke("text");
  }

  clickFinish() {
    cy.get('[data-test="finish"]').click();
    return new ThankyouPage();
  }
}

export default CheckoutOverview;
