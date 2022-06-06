/// <reference types="Cypress" />

import Inventory from "../support/pages/inventory";

let inventoryPage = new Inventory();

// test page https://www.saucedemo.com/inventory-item.html
describe("Inventory Item", () => {
  beforeEach(() => {
    inventoryPage.visit().login();
  });

  it("Should navigate to product details", () => {
    const inventoryItem = inventoryPage.goToProductDetails(1);
    inventoryItem.getProductName().should("equal", "Sauce Labs Backpack");
    inventoryItem.getProductPrice().should("equal", "$29.99");
  });

  it("Should add and remove item", () => {
    const inventoryItem = inventoryPage.goToProductDetails(1);
    inventoryItem.addToCart();
    inventoryItem.mainHeader.getShoppingCardBadge().should("have.text", "1");
    inventoryItem.removeFromCart();
  });
});
