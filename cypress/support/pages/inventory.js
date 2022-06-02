class Inventory {
  visit() {
    cy.visit("https://www.saucedemo.com/");
    return this;
  }

  login() {
    cy.get("[data-test=username]").type("standard_user");
    cy.get("[data-test=password]").type("secret_sauce");
    cy.get("[data-test=login-button]").click();
  }

  url() {
    return cy.url();
  }

  getTitle() {
    return cy.get(".title");
  }

}

export default Inventory;
