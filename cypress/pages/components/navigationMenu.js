export class NavigationMenu {
  elements = {
    menuElement: (value) => cy.contains(value),
    subPageElement: (value) => cy.contains(value),
  };

  openMenuByValue(value) {
    this.elements.menuElement(value).click();
  }
  openSubPage(value) {
    this.elements.subPageElement(value).click();
  }
}
