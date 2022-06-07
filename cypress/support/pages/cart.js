class Cart {
  getPageTitle(index) {
    return cy.get(`.header_secondary_container`).invoke("text");
  }
}

export default Cart;
