class productDetailsPage  {
  
    //Locators
    

    productTitle() {
        return cy.get('.inventory_details_name')
    }

    productPrice(){
        return cy.get('.inventory_details_price')
    }

    backToProductList(){
        return cy.get('[data-test="back-to-products"]')
    }

    addElementToTheCarButton(){
        return cy.get('.btn_inventory')    
    }

}

export default productDetailsPage

