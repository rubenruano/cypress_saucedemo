class InventoryItem {
  getProductName() {
    return cy.get('.inventory_details_name').invoke('text');
  }

  getProductPrice() {
      return cy.get('.inventory_details_price').invoke('text');
  }

  addToCart() {
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  }

  removeFromCart() {
      cy.get('[data-test="remove-sauce-labs-backpack"]').click();
  }
}

export default InventoryItem;
