/// <reference types="cypress" />

describe("First suite", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("First test", () => {
    cy.visit("/pages/layout");
    cy.visit("/pages/layout/accordion");
    cy.visit("/pages/forms");
    cy.visit("/pages/forms/layouts");
  });
});
