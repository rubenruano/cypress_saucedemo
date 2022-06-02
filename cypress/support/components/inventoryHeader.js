const HEADER_SELECTOR = ".header_container";

class InventoryHeader {
  getTitle() {
    return cy.get(HEADER_SELECTOR).find(".title");
  }
}

export default InventoryHeader;
