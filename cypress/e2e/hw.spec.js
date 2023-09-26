/// <reference types="cypress" />

describe("First suite", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Theme changes test", () => {
    const colors = {
      Light: "rgb(255, 255, 255)",
      Dark: "rgb(34, 43, 69)",
      Cosmic: "rgb(50, 50, 89)",
      Corporate: "rgb(255, 255, 255)",
    };

    cy.get("nb-select").click();
    cy.get(".options-list")
      .find("nb-option")
      .each((el) => {
        const option = el.text().trim();
        cy.wrap(el).click();
        cy.get("nb-layout-header nav")
          .should("have.css", "background-color", colors[option]);
        cy.get("nb-select").click();
      });
  });

  it("Accordion text visibility check", () => {
    cy.clickToMenuByName("Layout");
    cy.clickToMenuByName("Accordion");
    cy.contains("nb-accordion-item-header", "Product Details")
      .siblings("nb-accordion-item-body")
      .find(".item-body")
      .contains("interstellar cloud")
      .then((detailsTextArea) => {
        cy.wrap(detailsTextArea).should("not.be.visible");
        cy.get("nb-card-body button").forceClick();
        cy.wrap(detailsTextArea).should("be.visible");
      });
  });

  it("Popover visibility test", () => {
    cy.contains("Modal & Overlays").click();
    cy.contains("Popover").click();
    cy.contains("button", "Right").trigger("mouseenter");
    cy.contains("nb-popover", "Hello, how are you today?").should("be.visible");
  });

  it("Result form dialog test", () => {
    cy.contains("Modal & Overlays").click();
    cy.contains("Dialog").click();
    cy.contains("nb-card", "Return Result From Dialog").then((card) => {
      cy.wrap(card).find("nb-card-body button").click();
      cy.get("ngx-dialog-name-prompt input").type("Test Name");
      cy.get("[status='success']").click();
      cy.wrap(card)
        .find("nb-card-body li")
        .contains("Test Name")
        .should("be.visible");
    });
  });
});
