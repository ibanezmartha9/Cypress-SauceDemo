class productDetailsPage  {
  
    //Locators
    

    productTitleToAdd() {
        return cy.get('.inventory_details_name')
    }

    productPriceToAdd(){
        return cy.get('.inventory_details_price') //
    }

    backToProductList(){
        return cy.get('[data-test="back-to-products"]')
    }

    addElementToTheCarButton(){
        return cy.get('.btn_inventory')    
    }

}

export default productDetailsPage

