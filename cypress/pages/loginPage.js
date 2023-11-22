class loginPage{

    //Navigation

    navigateToTheHomePage(){     
    cy.visit("https://www.saucedemo.com/")
    }

    //Locators
    
    usernameField(){
        return cy.get('[data-test="username"]')
    }

    passwordField(){
        return cy.get('[data-test="password"]')
    }

    loginButton(){
        return cy.get('[data-test="login-button"]')
    }
}

export default loginPage