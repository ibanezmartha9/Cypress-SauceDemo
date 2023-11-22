class cartPage {

    //Locators

    yourCartLabel(){
        return cy.contains('Your Cart')
    }

    checkoutButton(){
        return cy.get('[data-test="checkout"]')
    }

    checkoutInformationLabel(){
        return cy.contains('Checkout: Your Information')
    }

    firstNameField(){
        return cy.get('[data-test="firstName"]')
    }

    lastNameField(){
        return cy.get('[data-test="lastName"]')
    }

    zipPostalCodeField(){
        return cy.get('[data-test="postalCode"]')
    }

    continueButton(){
        return cy.get('[data-test="continue"]')
    }

    checkoutOverviewLabel(){
        return cy.contains('Checkout: Overview')
    }

    finishButton(){
        return cy.get('[data-test="finish"]')
    }

    thankMessage(){
        return cy.contains('Thank you for your order!')
    }

    backHomeButton(){
        return cy.get('[data-test="back-to-products"]')
    }
}

export default cartPage