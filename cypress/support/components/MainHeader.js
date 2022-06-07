import Cart from "../pages/cart";

class MainHeader {
  getShoppingCardBadge() {
    return cy.get(".shopping_cart_link > .shopping_cart_badge");
  }

  clickShoppingCart() {
    cy.get(".shopping_cart_link").click();

    return new Cart();
  }
}

export default MainHeader;
