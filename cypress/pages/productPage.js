class productPage  {

  
    //Locators
    
   productLabel() {
        return cy.contains('Products')
    }

    itemName(position) {
        return cy.get('.inventory_item_name').eq(position)
    }

    itemPrice(position) {
        return cy.get('.inventory_item_price').eq(position)
    }

    addProductToTheCart(position){
        return cy.get('.btn_inventory').eq(position).click()
    }

    openElement(position){
        return cy.get('#item_'+position+'_title_link > .inventory_item_name')
    }   

    ShoppingCartButton(){
        return cy.get('.shopping_cart_link')
    }
       
}

export default productPage

