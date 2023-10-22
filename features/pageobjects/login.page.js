const { $ } = require('@wdio/globals')
const Page = require('./page');

class LoginPage extends Page {

    get inputEmail () {
        return $('#email');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    get loginPageElement () { 
        return $("//h2[normalize-space()='hai, kasirAja']") 
    };
    
    get messageElement () { 
        return $("//div[@role='alert']") 
    };
    
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
