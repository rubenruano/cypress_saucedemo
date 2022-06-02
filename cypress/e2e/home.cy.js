/// <reference types="Cypress" />

describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
  });

  it("Login", () => {
    cy.contains("Accepted usernames are");
  });
});
