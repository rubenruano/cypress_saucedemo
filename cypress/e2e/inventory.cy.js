/// <reference types="Cypress" />

import Login from "../support/pages/login";

let loginPage = new Login();

describe("Inventory", () => {
  it("Login to page", () => {
    loginPage.visit();
    loginPage.login();

    cy.get(".title").then($title => {
      console.log($title.text());
    });
  });
});
