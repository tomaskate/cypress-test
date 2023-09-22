/// <reference types="cypress" />

describe("Orange app tests", () => {
    it("Login and ", () => {
        cy.intercept("/web/index.php/events/push").as("push");
        cy.intercept("/web/index.php/api/v2/recruitment/vacancies**", {fixture: "vacancies"}).as("vacancies");
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.get("[name='username']").type("Admin");
        cy.get("[name='password']").type("admin123");
        cy.get("[type='submit']").click();
        cy.wait("@push");
        cy.contains("Recruitment").click();
        cy.contains("a", "Vacancies").click();
        cy.fixture("vacancies").then(res => {
            console.log(res);
        })
        cy.wait("@vacancies").its("response").then(response => {
            console.log(response);
        });
    });
});