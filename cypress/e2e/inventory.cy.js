/// <reference types="Cypress" />

import Inventory from "../support/pages/inventory";

let inventoryPage = new Inventory();

describe("Inventory", () => {
  beforeEach(() => {
    inventoryPage.visit().login();
  });

  it("Should be the inventory page", () => {
    inventoryPage.url().should("include", "/inventory.html");
    inventoryPage.header.getTitle().should("contain", "Products");
  });

  it("Should have the correct number of products", () => {
    inventoryPage.container.getProducts().should("have.length", 6);
  });

  it("Should have the correct product name", () => {
    inventoryPage.container.getProduct(1).should("contain", "Sauce Labs Backpack");
    inventoryPage.container.getProduct(3).should("contain", "Sauce Labs Bolt T-Shirt");
  });
});
