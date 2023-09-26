import { ApiHelper } from "../support/apiHelper";

describe("asd", () => {
  it("asd", () => {

    const obj = {
        id: 1,
        
    }
    cy.intercept("POST", "/web/index.php/events/push").as("push");
    cy.intercept("GET", "/web/index.php/api/v2/*/vacancies**")
    .as("vacancies");
    cy.fixture("vacansies").then(fixture => {
        fixture.data[0].id = 2;
        console.log(fixture);
    });
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.get("input[name='username']").type("Admin");
    cy.get("input[name='password']").type("admin123");
    cy.get("button[type='submit']").click();
    cy.wait("@push", { timeout: 7000 });
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewJobVacancy");
    cy.wait("@vacancies");
    ApiHelper.getVacansyById(5).then(res => {
        console.log(res);
    })

  });
});
