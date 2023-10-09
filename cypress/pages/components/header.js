export class Header {
  elements = {
    header: () => cy.get("nb-layout-header nav"),
    dropDownLight: () => cy.get("button.select-button"),
    searchIcon: () => cy.get("[data-name='search']"),
    emailIcon: () => cy.get("[data-name='email']"),
    bellIcon: () => cy.get("[data-name='bell']"),
    userIcon: () => cy.get(".user-container"),
  };

  assertUserIconVisible() {
    this.elements.userIcon().should("be.visible");
  }
}