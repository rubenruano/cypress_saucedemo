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
      .then(($product) => {
        const priceText = $product.text();
        const price = parseFloat(priceText.replace("$", ""));
        return price;
      });
  }

  getProductName(productIndex) {
    return this.getProduct(productIndex)
      .find(".inventory_item_name")
      .then(($product) => {
        const name = $product.text();
        return name;
      });
  }

  addProduct(productIndex) {
    this.getProduct(productIndex)
      .find(".btn_primary").click();
  }

  removeProduct(productIndex) {
    return this.getProduct(productIndex)
      .find('.btn_secondary').click();
  }

  getNumberProducts() {
    cy.wrap(cellContents.length).should("eq", 1);
  }
}

export default InventoryContainer;
