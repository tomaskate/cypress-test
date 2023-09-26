export class ApiHelper {

    static getVacansyById(id) {
        return cy.request("GET", `/web/index.php/api/v2/recruitment/vacancies/${id}`);
    }

}