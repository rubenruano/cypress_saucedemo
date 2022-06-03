const HEADER_SELECTOR = ".header_container";

class InventoryHeader {
  getTitle() {
    return cy.get(HEADER_SELECTOR).find(".title");
  }

  setSortOrderAscendingName() {
    cy.get(HEADER_SELECTOR).find("select").select("az");
  }

  setSortOrderDescendingName() {
    cy.get(HEADER_SELECTOR).find("select").select("za");
  }

  setSortOrderAscendingPrice() {
    cy.get(HEADER_SELECTOR).find("select").select("lohi");
  }

  setSortOrderDescendingPrice() {
    cy.get(HEADER_SELECTOR).find("select").select("hilo");
  }
}

export default InventoryHeader;
