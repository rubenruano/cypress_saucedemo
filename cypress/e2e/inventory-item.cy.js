/// <reference types="Cypress" />

import Inventory from "../support/pages/inventory";
import InventoryItem from "../support/pages/inventoryItem";

let inventoryPage = new Inventory();

// test page https://www.saucedemo.com/inventory-item.html
describe("Inventory Item", () => {
  before(() => {
    inventoryPage.visit().login();
  });

  it("Should navigate to product details", () => {
    inventoryPage.container.getProduct(1).as("selectedProduct");

    inventoryPage.goToProductDetails(1);

    const inventoryItem = new InventoryItem();

    inventoryItem.getProductName().should("equal", "Sauce Labs Backpack");
  });
});
