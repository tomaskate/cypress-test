/// <reference types="cypress" />
import { ForgotPasswordPage } from "../pages/forgotPasswordPage";
import { LoginPage } from "../pages/loginPage";
import { NavigationMenu } from "../pages/components/navigationMenu";
import { RegisterPage } from "../pages/registerPage";

describe("Forgot password tests", () => {
  const loginPage = new LoginPage();
  const forgotPasswordPage = new ForgotPasswordPage();
  const validEmail = "test@test.com";

  beforeEach(() => {
    const navMenu = new NavigationMenu();

    cy.visit("/");
    navMenu.openMenuByValue("Auth");
    navMenu.openSubPage("Login");
    loginPage.clickOnForgotPasswordLink();
  });

  it("Check that all elements are visible on the page", () => {
    forgotPasswordPage.assertElementsPresence();
  });

  it("Check invalid email input", () => {
    const invalidEmail = "test";
    forgotPasswordPage.enterEmail(invalidEmail);
    forgotPasswordPage.assertInValidEmail();
  });

  it("Check valid email input", () => {
    forgotPasswordPage.enterEmail(validEmail);
    forgotPasswordPage.assertValidEmail();
  });

  it("Check successful request", () => {
    forgotPasswordPage.enterEmail(validEmail);
    forgotPasswordPage.clickOnRequest();
    forgotPasswordPage.assertSuccessRequest();
  });

  it("Check redirect to Login page by clicking on 'Back to Login'", () => {
    forgotPasswordPage.clickOnBackToLogin();
    loginPage.assertElementsPresence();
  });

  it("Check redirect to Register page by clicking on 'Register'", () => {
    const registerPage = new RegisterPage();
    forgotPasswordPage.clickOnRegister();
    registerPage.assertElementsPresence();
  });
});
