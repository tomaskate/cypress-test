export class FormsPage {

    emailInput = "#inputEmail1";

    elements = {
        emailInput: () => cy.get("#inputEmail1"),
        passwordInput: () => cy.get("#inputPassword2")
    }

    enterEmailValue(value) {
        this.elements.emailInput().type(value);
    }

    enterPasswordValueAndValidate(value) {
        this.elements.passwordInput().type(value, {sensitive: true});
        this.elements.passwordInput().should("have.value", value);
    }

}