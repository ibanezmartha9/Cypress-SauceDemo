class productPage  {

    //Locators

    productLabel() {
        return cy.get('.title')
    }

    addElementToTheCarButton(product){
        return cy.get('[data-test="add-to-cart-'+product+'"]')        
    }

    removeButton(product){
        return cy.get('[data-test="remove-'+product+'"]')
    }

    //Functions
}

export default productPage

