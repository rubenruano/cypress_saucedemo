class Checkout {
  setPersonalInformation({ firstName, lastName, postalCode }) {
    cy.get(`[data-test="firstName"]`).type(firstName);
    cy.get(`[data-test="lastName"]`).type(lastName);
    cy.get(`[data-test="postalCode"]`).type(postalCode);
  }
}

export default Checkout;
