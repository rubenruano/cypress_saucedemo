/// <reference types="Cypress" />

import Inventory from "../support/pages/inventory";
import InventoryItem from "../support/pages/inventoryItem";

let inventoryPage = new Inventory();

// test page https://www.saucedemo.com/inventory-item.html
describe("Inventory Item", () => {
  beforeEach(() => {
    inventoryPage.visit().login();
  });

  it("Should navigate to product details", () => {
    inventoryPage.goToProductDetails(1);
    const inventoryItem = new InventoryItem();
    inventoryItem.getProductName().should("equal", "Sauce Labs Backpack");
    inventoryItem.getProductPrice().should("equal", "$29.99");
  });

  it("Should add and remove item", () => {
    inventoryPage.goToProductDetails(1);

    const inventoryItem = new InventoryItem();
    inventoryItem.addToCart();
    inventoryItem.mainHeader.getShoppingCardBadge().should("have.text", "1");
    inventoryItem.removeFromCart();
  });
});
