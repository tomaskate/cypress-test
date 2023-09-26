/// <reference types="cypress" />
import { NavMenuComponent } from "../pages/components/NavigationMenuComponent";

describe("Second suite", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("First", () => {
    const menu = new NavMenuComponent();
    const forms = menu.openFormLayoutsPage();
    // cy.clickToMenuByName("Forms");
    // cy.clickToMenuByName("Form Layouts");
    
    forms.enterEmailValue("value");
    forms.emailInput.should("have.value", "value");
    forms.enterPasswordValueAndValidate("test");
  });
});
