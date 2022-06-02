/// <reference types="Cypress" />

import Login from "../support/pages/login";

let loginPage = new Login();

describe("Login", () => {
  it("Can login", () => {
    loginPage.visit();
    loginPage.login();

    cy.get(".title").then(($title) => {
      console.log($title.text());
    });
  });
});
