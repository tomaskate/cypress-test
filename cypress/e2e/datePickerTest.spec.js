/// <reference types="cypress" />
import { NavigationMenu } from "../pages/components/navigationMenu";
import { DatePickerPage } from "../pages/datePickerPage";

describe("Datepicker tests", () => {
  beforeEach(() => {
    const navMenu = new NavigationMenu();
    cy.visit("/");
    navMenu.openMenuByValue("Forms");
    navMenu.openSubPage("Datepicker");
  });

  it("Check today's selected value", () => {
    const datePickerPage = new DatePickerPage();
    datePickerPage.clickOnDatePickerField();
    datePickerPage.selectTodayCell();
    datePickerPage.assertTodayCellSelected();
  });
});
