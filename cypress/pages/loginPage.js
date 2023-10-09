export class LoginPage {
  elements = {
    emailInput: () => cy.get("[name='email']"),
    passwordInput: () => cy.get("[name='password']"),
    checkboxRemember: () => cy.get(".custom-checkbox"),
    logInButton: () => cy.get("button[status='primary']"),
    forgotPasswordLink: () => cy.get(".forgot-password"),
    registerLink: () => cy.get(".text-link"),
    invalidEmailMessage: () => cy.contains("Email should be the real one!"),
    invalidPasswordMessage: () =>
      cy.contains("Password should contain from 4 to 50 characters"),
    requiredEmailMessage: () => cy.contains("Email is required!"),
    requiredPasswordMessage: () => cy.contains("Password is required!"),
    arrowBack: () => cy.get("[data-name='arrow-back']"),
  };

  login(email, password) {
    this.elements.emailInput().type(email);
    this.elements.emailInput().should("have.value", email);
    this.elements.passwordInput().type(password);
    this.elements.passwordInput().should("have.value", password);
    this.elements.logInButton().click({ force: true });
  }

  clickOnForgotPasswordLink() {
    this.elements.forgotPasswordLink().click();
  }

  assertSuccessLogin() {
    cy.url().should("include", "/pages");
  }

  assertValidEmail() {
    this.elements.invalidEmailMessage().should("not.be.visible");
  }
  assertValidPassword() {
    this.elements.invalidPasswordMessage().should("not.be.visible");
  }

  assertInvalidEmail() {
    this.elements.invalidEmailMessage().should("be.visible");
  }

  assertInvalidPassword() {
    this.elements.invalidPasswordMessage().should("be.visible");
  }

  checkRequiredFieldsAndWarnings() {
    this.elements.emailInput().click();
    this.elements.passwordInput().click();
    this.elements.logInButton().click({ force: true });
    this.elements.requiredEmailMessage().should("be.visible");
    this.elements.requiredPasswordMessage().should("be.visible");
  }

  assertLoginButtonActive() {
    this.elements.logInButton().should("be.enabled");
  }

  assertLoginButtonInactive() {
    this.elements.logInButton().should("be.disabled");
  }

  assertElementsPresence() {
    this.elements.emailInput().should("be.visible");
    this.elements.passwordInput().should("be.visible");
    this.elements.logInButton().should("be.visible");
    this.elements.forgotPasswordLink().should("be.visible");
    this.elements.checkboxRemember().should("be.visible");
  }
}
