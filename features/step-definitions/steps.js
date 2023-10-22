const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page');
const DashboardPage = require('../pageobjects/dashboard.page');

const pages = {
    login: LoginPage
}

Given(/^User on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^User login with (.+) and password (.+)$/, async (email, password) => {
    await LoginPage.inputEmail.setValue(email)
    await LoginPage.inputPassword.setValue(password)
});


When(/^User clicks on login button/, async () => {
    await LoginPage.btnSubmit.click();
});

Then(/^User should see a header (.*)$/, async (header) => {
    await expect(DashboardPage.dashboardHeader).toBeExisting();
    await expect(DashboardPage.dashboardHeader).toHaveTextContaining(header);
});

Then (/^User should see alert (.*)$/, async (message) => {
    await expect(LoginPage.messageElement).toBeExisting();
    await expect(LoginPage.messageElement).toHaveTextContaining(message);
});

Then (/^User clicks logout/, async () => {
    await DashboardPage.userMenu.click();
    await DashboardPage.btnLogout.click();
});

Then (/^User verify back to login page/, async () => {
    await expect(LoginPage.loginPageElement).toBeExisting();
    await expect(LoginPage.loginPageElement).toHaveTextContaining("hai, kasirAja");
});
