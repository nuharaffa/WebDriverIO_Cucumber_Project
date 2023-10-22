const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DashboardPage extends Page {
    /**
     * define selectors using getter methods
     */
    get dashboardHeader () {
        return $("//h3[normalize-space()='kasirAja']");
    }

    get userMenu () {
        return $("//button[@id='menu-button-14']")
    }

    get btnLogout () {
        return $("#menu-list-14-menuitem-12")
    }
}

module.exports = new DashboardPage();