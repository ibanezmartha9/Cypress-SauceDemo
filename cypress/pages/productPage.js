class productPage  {

  
    //Locators
    
   productLabel() {
        return cy.contains('Products')
    }

    openElement(position){
        return cy.get('#item_'+position+'_title_link > .inventory_item_name')
    }   

    ShoppingCartButton(){
        return cy.get('.shopping_cart_link')
    }
       
}

export default productPage

