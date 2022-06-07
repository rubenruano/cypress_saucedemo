/// <reference types="Cypress" />

import InventoryPage from "../support/pages/inventory";

let inventoryPage = new InventoryPage();

//
// Test Inventory
// https://www.saucedemo.com/inventory.html
//
describe("Inventory", () => {
  before(() => {
    inventoryPage.visit().login();
  });

  it("Should be the inventory page", () => {
    inventoryPage.url().should("include", "/inventory.html");
    inventoryPage.inventoryHeader.getTitle().should("contain", "Products");
  });

  it("Should have at least two product", () => {
    inventoryPage.container.getProducts().should("have.length.gte", 2);
  });

  it("Should sort by product name A-Z", () => {
    inventoryPage.inventoryHeader.setSortOrderAscendingName();
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
    inventoryPage.inventoryHeader.setSortOrderDescendingName();
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
    inventoryPage.inventoryHeader.setSortOrderAscendingPrice();
    inventoryPage.container.getProductPrice(1).then(($price1) => {
      inventoryPage.container.getProductPrice(2).then(($price2) => {
        expect($price1).to.be.below($price2);
      });
    });
  });

  it("Should sort by product price Hight to Low", () => {
    inventoryPage.inventoryHeader.setSortOrderDescendingPrice();
    inventoryPage.container.getProductPrice(1).then(($price1) => {
      inventoryPage.container.getProductPrice(2).then(($price2) => {
        expect($price1).to.be.above($price2);
      });
    });
  });

  it("Should add and remove products", () => {
    inventoryPage.container.addProduct(1);
    inventoryPage.container.addProduct(2);
    inventoryPage.container.addProduct(3);
    inventoryPage.container.addProduct(4);
    inventoryPage.mainHeader.getShoppingCardBadge().should("have.text", 4);
    inventoryPage.container.removeProduct(1);
    inventoryPage.container.getProduct(2).then(($p) => console.log($p));
    inventoryPage.container.removeProduct(2);
    inventoryPage.mainHeader.getShoppingCardBadge().should("have.text", 2);
  });
});

//
// Test Inventory Item
// https://www.saucedemo.com/inventory-item.html
//
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

//
// Test Cart
// https://www.saucedemo.com/cart.html
//
describe("Inventory Item", () => {
  beforeEach(() => {
    inventoryPage.visit().login();
  });

  it("Should list products added into the cart", () => {
    inventoryPage.container.addProduct(1);
    inventoryPage.container.addProduct(2);
    inventoryPage.container.addProduct(3);
    inventoryPage.container.addProduct(4);

    const cartPage = inventoryPage.mainHeader.clickShoppingCart();
    cartPage.getPageTitle().should("equal", "Your Cart");
    cartPage.clickContinueShopping();
    const cartPage2 = inventoryPage.mainHeader.clickShoppingCart();
    const checkoutPage = cartPage2.clickGoToCheckout();
    checkoutPage.setPersonalInformation({
      firstName: "John",
      lastName: "Doe",
      postalCode: "123456",
    });
    const checkoutOverview  = checkoutPage.gotToCheckoutOverview();
    checkoutOverview.getTitle().should("equal", "Checkout: Overview");
  });
});


