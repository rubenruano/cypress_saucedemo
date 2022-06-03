import InventoryHeader from "../components/inventory/inventoryHeader";
import InventoryContainer from "../components/inventory/inventoryContainer";

class Inventory {
  constructor() {
    this.header = new InventoryHeader();
    this.container = new InventoryContainer();
  }

  visit() {
    cy.visit("https://www.saucedemo.com/");
    return this;
  }

  login() {
    cy.get("[data-test=username]").type("standard_user");
    cy.get("[data-test=password]").type("secret_sauce");
    cy.get("[data-test=login-button]").click();
  }

  url() {
    return cy.url();
  }

}

export default Inventory;
