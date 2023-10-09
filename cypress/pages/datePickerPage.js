export class DatePickerPage {
  elements = {
    formPickerInput: () => cy.get("[placeholder='Form Picker']"),
    rangePicketInput: () => cy.get("[placeholder='Range Picker']"),
    maxMinInput: () => cy.get("[placeholder='Min Max Picker']"),
    todayCell: () => cy.get(".today"),
    calendarTitle: () => cy.get(".title"),
  };

  clickOnDatePickerField() {
    this.elements.formPickerInput().click();
  }

  selectTodayCell() {
    this.elements.calendarTitle().click();
    this.elements.todayCell().click();
  }

  assertTodayCellSelected() {
    const moment = require("moment");
    this.elements.formPickerInput().should("have.value", moment().format("ll"));
  }
}
