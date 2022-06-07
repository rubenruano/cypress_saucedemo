class ThankyouPage {
  getTitle() {
    return cy.get(".complete-header").invoke("text");
  }
}

export default ThankyouPage;
