class Login {
  visit() {
    cy.visit("https://www.saucedemo.com/");
  }

  login() {
    cy.get("[data-test=username]").type("standard_user");
    cy.get("[data-test=password]").type("secret_sauce");
    cy.get("[data-test=login-button]").click();
  }
}

export default Login;
