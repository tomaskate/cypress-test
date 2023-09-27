export class ForgotPasswordPage {
  elements = {
    emailInput: () => cy.get("[name='email']"),
    arrowBack: () => cy.get("[data-name='arrow-back']"),
    backToLoginBtn: () => cy.contains("Back to Log In"),
    registerBtn: () => cy.contains("Register"),
    requestPasswordBtn: () => cy.get("button[status='primary']"),
    invalidEmailMessage: () => cy.contains("Email should be the real one!"),
  };

  enterEmail(email) {
    this.elements.emailInput().type(email);
    cy.get("body").click();
  }

  assertInValidEmail() {
    this.elements.invalidEmailMessage().should("be.visible");
    this.elements.requestPasswordBtn().should("be.disabled");
  }

  assertValidEmail() {
    this.elements.requestPasswordBtn().should("be.enabled");
  }

  clickOnRegister() {
    this.elements.registerBtn().click();
  }

  clickOnBackToLogin() {
    this.elements.backToLoginBtn().click();
  }

  assertElementsPresence() {
    this.elements.emailInput().should("be.visible");
    this.elements.requestPasswordBtn().should("be.visible");
    this.elements.registerBtn().should("be.visible");
    this.elements.backToLoginBtn().should("be.visible");
    this.elements.arrowBack().should("be.visible");
  }

  clickOnRequest() {
    this.elements.requestPasswordBtn().click();
  }

  assertSuccessRequest() {
    cy.url().should("include", "/pages");
  }
}
