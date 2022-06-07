class CheckoutOverview {
  getTitle() {
    return cy.get('.title').invoke("text");
  }
}

export default CheckoutOverview;
