/// <reference types="cypress" />

describe("UI suite", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("First test", () => {
    const colors = {
      Light: "rgb(255, 255, 255)",
      Dark: "rgb(34, 43, 69)",
      Cosmic: "rgb(50, 50, 89)",
      Corporate: "rgb(255, 255, 255)",
    };

    cy.wrap(Object.keys(colors)).each((theme) => {
      cy.get("button.select-button").click();
      cy.contains("nb-option", theme.trim()).click();
      cy.get("nb-layout-header nav").should(
        "have.css",
        "background-color",
        colors[theme]
      );
    });
  });

  it("Second test", () => {
    cy.contains("Layout").click();
    cy.contains("Accordion").click();
    cy.contains(".item-body", "nebula").should("not.be.visible");
    cy.contains("button", "Toggle First Item").click();
    cy.contains(".item-body", "nebula").should("be.visible");
  });

  it("Third test", () => {
    cy.contains("Modal & Overlays").click();
    cy.contains("Popover").click();
    cy.contains("button", "Right").trigger("mouseenter");
    cy.contains("nb-popover", "Hello, how are you today?").should("be.visible");
  });

  it("Fourth test", () => {
    cy.contains("Modal & Overlays").click();
    cy.contains("Dialog").click();
    cy.contains("Enter Name").click();
    cy.get("input[placeholder='Name']").type("Kate");
    cy.contains("Submit").click();
    cy.contains("ul > li", "Kate").should("be.visible");
  });
});
