export class LoginPage {
    constructor() {
        this.userInput = "#user";
        this.passwordInput = "#pass";
        this.btnLogin = "#submitForm";
    }

    enterUser(username) {
        cy.get(this.userInput).type(username);
    };

    enterPassword(password) {
        cy.get(this.passwordInput).type(password);
    };

    clickBotonLogin() {
        cy.get(this.btnLogin).click();
    }


}