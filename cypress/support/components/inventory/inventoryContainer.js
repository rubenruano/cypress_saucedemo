const CONTAINER_SELECTOR = ".inventory_container";

class InventoryContainer {
  getProducts() {
    return cy.get(CONTAINER_SELECTOR).find(".inventory_item");
  }

  getProduct(productIndex) {
    return cy
      .get(CONTAINER_SELECTOR)
      .find(`.inventory_list > :nth-child(${productIndex})`);
  }

  getProductPrice(productIndex) {
    return this.getProduct(productIndex)
      .find(".inventory_item_price")
      .then(($product1) => {
        const priceText = $product1.text();
        const price = parseFloat(priceText.replace("$", ""));
        return price;
      });
  }

  getProductContainer(productIndex) {
    return cy
      .get(CONTAINER_SELECTOR)
      .find(`.inventory_list > :nth-child(${productIndex})`);
  }

  getNumberProducts() {
    cy.wrap(cellContents.length).should("eq", 1);
  }
}

export default InventoryContainer;
