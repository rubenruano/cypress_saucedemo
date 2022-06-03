/// <reference types="Cypress" />

import Inventory from "../support/pages/inventory";

let inventoryPage = new Inventory();

describe("Inventory", () => {
  before(() => {
    inventoryPage.visit().login();
  });

  it("Should be the inventory page", () => {
    inventoryPage.url().should("include", "/inventory.html");
    inventoryPage.header.getTitle().should("contain", "Products");
  });

  it("Should have at least two product", () => {
    inventoryPage.container.getProducts().should("have.length.gte", 2);
  });

  // TODO: solo de prueba
  it("Should have the correct product name", () => {
    inventoryPage.container
      .getProduct(1)
      .should("contain", "Sauce Labs Backpack");
    inventoryPage.container
      .getProduct(3)
      .should("contain", "Sauce Labs Bolt T-Shirt");
  });

  it("Should sort by product price Low to Hight", () => {
    inventoryPage.header.setSortOrderAscendingPrice();

    inventoryPage.container.getProductPrice(1).then(($price1) => {
      inventoryPage.container.getProductPrice(2).then(($price2) => {
        expect($price1).to.be.below($price2);
      });
    });
  });

  it("Should sort by product price Hight to Low", () => {
    inventoryPage.header.setSortOrderDescendingPrice();

    inventoryPage.container.getProductPrice(1).then(($price1) => {
      inventoryPage.container.getProductPrice(2).then(($price2) => {
        expect($price1).to.be.above($price2);
      });
    });
  });
});
