declare namespace Cypress {
    interface Chainable<Subject> {
      clickToMenuByName(element: Cypress.Chainable): Chainable<any>
  }
}