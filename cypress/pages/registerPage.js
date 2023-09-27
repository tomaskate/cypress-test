export class RegisterPage {
  elements = {
    nameInput: () => cy.get("#input-name"),
    emailInput: () => cy.get("[name='email']"),
    passwordInput: () => cy.get("[name='password']"),
    repeatPasswordInput: () => cy.get("[name='rePass']"),
    agreeTCbox: () => cy.get(".custom-checkbox"),
    loginLink: () => cy.contains(".text-link", "Log in"),
    registerButton: () => cy.get("[status='primary']"),
    arrowBack: () => cy.get("[data-name='arrow-back']"),
    requiredEmailMessage: () => cy.contains("Email is required!"),
    requiredPasswordMessage: () => cy.contains("Password is required!"),
    requiredRepeatedPasswordMessage: () =>
      cy.contains("Password confirmation is required!"),
    invalidEmailMessage: () => cy.contains("Email should be the real one!"),
    invalidPasswordMessage: () =>
      cy.contains("Password should contain from 4 to 50 characters"),
    invalidNameMessage: () =>
      cy.contains("Full name should contains from 4 to 50 characters"),
  };

  assertElementsPresence() {
    this.elements.nameInput().should("be.visible");
    this.elements.emailInput().should("be.visible");
    this.elements.passwordInput().should("be.visible");
    this.elements.repeatPasswordInput().should("be.visible");
    this.elements.agreeTCbox().should("be.visible");
    this.elements.loginLink().should("be.visible");
    this.elements.registerButton().should("be.visible");
    this.elements.arrowBack().should("be.visible");
  }

  fillInputs(name, email, password, repeatPwd) {
    this.elements.nameInput().type(name);
    this.elements.emailInput().type(email);
    this.elements.passwordInput().type(password);
    this.elements.repeatPasswordInput().type(repeatPwd);
  }

  tickCheckBoxTC() {
    this.elements.agreeTCbox().click();
  }

  clickOnLoginLink() {
    this.elements.loginLink().click();
  }

  clickOnRegister() {
    this.elements.registerButton().click();
  }

  assertRequiredFields() {
    this.elements.nameInput().click();
    this.elements.emailInput().click();
    this.elements.passwordInput().click();
    this.elements.repeatPasswordInput().click();
    this.elements.registerButton().click({ force: true });
    this.elements.requiredEmailMessage().should("be.visible");
    this.elements.requiredPasswordMessage().should("be.visible");
    this.elements.requiredRepeatedPasswordMessage().should("be.visible");
    this.elements.invalidNameMessage().should("not.be.visible");
  }

  assertInvalidInputs() {
    this.elements.invalidEmailMessage().should("be.visible");
    this.elements.invalidPasswordMessage().should("be.visible");
    this.elements.invalidNameMessage().should("be.visible");
  }

  assertPasswordDifference() {
    this.elements
      .repeatPasswordInput()
      .should("have.attr", "ng-reflect-status", "danger");
  }

  assertRegisterButtonActive() {
    this.elements.registerButton().should("be.enabled");
  }

  assertRegisterButtonInactive() {
    this.elements.registerButton().should("be.disabled");
  }
}
