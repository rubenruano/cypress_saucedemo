/// <reference types="Cypress" />

import Inventory from "../support/pages/inventory";

let inventoryPage = new Inventory();

// test page https://www.saucedemo.com/inventory.html
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

  it("Should sort by product name A-Z", () => {
    inventoryPage.header.setSortOrderAscendingName();

    inventoryPage.container.getProductName(1).then(($name1) => {
      inventoryPage.container.getProductName(2).then(($name2) => {
        expect(
          $name1.localeCompare($name2),
          "failed to sort by ascending product name"
        ).eq(-1);
      });
    });
  });

  it("Should sort by product name Z-A", () => {
    inventoryPage.header.setSortOrderDescendingName();

    inventoryPage.container.getProductName(1).then(($name1) => {
      inventoryPage.container.getProductName(2).then(($name2) => {
        expect(
          $name1.localeCompare($name2),
          "failed to sort by descending product name"
        ).eq(1);
      });
    });
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


// TODO: Test Add/Remove product to cart