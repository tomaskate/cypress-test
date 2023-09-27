/// <reference types="cypress" />
import { LoginPage } from "../pages/loginPage";
import { NavigationMenu } from "../pages/components/navigationMenu";
import { RegisterPage } from "../pages/registerPage";
import { Header } from "../pages/components/header";

describe("Register tests", () => {
  const registerPage = new RegisterPage();

  const validName = "Kate";
  const validEmail = "test@test.com";
  const validPassword = "qwert1";

  beforeEach(() => {
    const navMenu = new NavigationMenu();

    cy.visit("/");
    navMenu.openMenuByValue("Auth");
    navMenu.openSubPage("Register");
  });

  it("Check that all elements are visible on the page", () => {
    registerPage.assertElementsPresence();
  });

  it("Check valid inputs", () => {
    registerPage.fillInputs(
      validName,
      validEmail,
      validPassword,
      validPassword
    );
    registerPage.tickCheckBoxTC();
    registerPage.assertRegisterButtonActive();
  });

  it.only("Check invalid inputs", () => {
    const invalidName = "qw";
    const invalidEmail = "test";
    const invalidPassword = "qwe";
    const differentPassword = "qwert2";

    registerPage.fillInputs(
      invalidName,
      invalidEmail,
      invalidPassword,
      differentPassword
    );
    registerPage.tickCheckBoxTC();
    registerPage.assertRegisterButtonInactive();
    registerPage.assertInvalidInputs();
    registerPage.assertPasswordDifference();
  });

  it("Check redirect to login page", () => {
    const loginPage = new LoginPage();
    registerPage.clickOnLoginLink();
    loginPage.assertElementsPresence();
  });

  it("Check success registration", () => {
    const header = new Header();
    registerPage.fillInputs(
      validName,
      validEmail,
      validPassword,
      validPassword
    );
    registerPage.tickCheckBoxTC();
    registerPage.clickOnRegister();
    header.assertUserIconVisible();
  });
});
