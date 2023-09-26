import { FormsPage } from "../FormsPage";

export class NavMenuComponent {

    errorValue = "Email should be the real one!";

    elements= {
        inputError: (value) => cy.get(".form-control-group").contains(value)
    }

    checkIsErrorVisibleByText(value) {
        const header = 
        this.inputError(errors.emailerror).should('be.visible');
    }

    openFormLayoutsPage() {
        this.elements.menuElement().click();
        return new FormsPage();
    }

}