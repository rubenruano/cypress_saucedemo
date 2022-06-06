
class Header {
  getShoppingCardBadge() {
    return cy.get(".shopping_cart_link > .shopping_cart_badge");
  }
}

export default Header;
