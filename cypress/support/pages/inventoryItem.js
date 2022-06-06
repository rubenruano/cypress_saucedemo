class InventoryItem {
  getProductName() {
    return cy.get('.inventory_details_name').invoke('text');
  }
}

export default InventoryItem;
