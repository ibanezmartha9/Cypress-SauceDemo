class productPage  {

  
    //Locators
    

    productLabel() {
        return cy.contains('Products')
    }

    addElementToTheCarButton(product){
        return cy.get('[data-test="add-to-cart-'+product+'"]')        
    }

    removeButton(product){
        return cy.get('[data-test="remove-'+product+'"]')
    }

    ShoppingCartButton(){
        return cy.get('.shopping_cart_link')
    }

    

    //Functions
    addAllElementsToTheCar () {
        return 0;

    }  
}

export default productPage

