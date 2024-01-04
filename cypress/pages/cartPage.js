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

    productTitleAdded(positionTitle) {
        return cy.get('#item_'+positionTitle+'_title_link > .inventory_item_name')
    }

    productPriceAdded(positionPrice) {
        return cy.get(':nth-child('+positionPrice+') > .cart_item_label > .item_pricebar > .inventory_item_price')
    }

    verifyItemsInCheckout(products){
        let productsInCheckout = []
        for(let i = 0; i < products.length; i++){ 
                cy.get('.inventory_item_name').eq(i).invoke('text').then(text2 => { 
                  cy.log(text2)  
                productsInCheckout.push(text2);
                })
                cy.get('.inventory_item_price').eq(i).invoke('text').then(text3 => { 
                    productsInCheckout.push(text3);
                    cy.log(text3)
                })     
                cy.log(productsInCheckout)          
            }
            
        }

    }

    // verifyItemsInCheckout(products){
    //     let productsAreOk = false;
    //     let productsInCheckout = []
    //     let productInCar;
    //     for(let i = 0; i < products.length; i++){ 
    //         cy.get('.inventory_item_name').eq(i).invoke('text').then(text2 => {
    //             productsInCheckout.push(text2);
    //             productInCar = text2;
    //             cy.log(productInCar)                                                     
    //         });
    //         let filteredProducts = products.filter( product => product.itemname == productInCar )
    //         products.forEach(product => cy.log(product.itemName))
    //         if(filteredProducts.length == 1) {
    //             productsAreOk = true
    //         }
    //         else {
    //             productsAreOk = false
    //         }
    //     }
    //     cy.log(productsAreOk)
    //     return productsAreOk
    // }            


export default cartPage
