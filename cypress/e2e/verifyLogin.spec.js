/// <reference types="cypress" />
import { NavigationMenu } from "../pages/components/navigationMenu";
import { LoginPage } from "../pages/loginPage";
import { Header } from "../pages/components/header";

describe("Login Tests", () => {
  const loginPage = new LoginPage();

  const validEmail = "test@test.com";
  const validPassword = "qwert1";

  beforeEach(() => {
    const navMenu = new NavigationMenu();
    cy.visit("/");
    navMenu.openMenuByValue("Auth");
    navMenu.openSubPage("Login");
  });

  it("Check invalid inputs - invalid email and invalid password", () => {
    const invalidEmail = "test";
    const invalidPassword = "qwe";
    loginPage.login(invalidEmail, invalidPassword);
    loginPage.assertInvalidEmail();
    loginPage.assertLoginButtonInactive();
  });

  it("Check required fields and warning messages", () => {
    loginPage.checkRequiredFieldsAndWarnings();
    loginPage.assertLoginButtonInactive();
  });

  it("Check valid inputs", () => {
    loginPage.login(validEmail, validPassword);
    loginPage.assertLoginButtonActive();
  });

  it("Check success log in", () => {
    const header = new Header();
    loginPage.login(validEmail, validPassword);
    loginPage.assertSuccessLogin();
    header.assertUserIconVisible();
  });
});
