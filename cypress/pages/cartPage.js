
let firstValue = 1
let valueIndex = 13
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

    totalBeforeTaxes(){
            let totalBT = 0
            cy.get('.summary_subtotal_label').invoke('text').then(name => {
                totalBT = name = name.slice(valueIndex);
         })                     
        return (totalBT)
    }   

      verifyItemsInCheckout(products){
        let productsInCheckout = [] 
        let sum = 0
        for(let i = 0; i < products.length; i++){             
                cy.get('.inventory_item_price').eq(i).invoke('text').then(text3 => { 
                    text3 = text3.slice(firstValue);
                    let value = parseFloat(text3) 
                    productsInCheckout.push(value)                
                })                                       
        }
        return productsInCheckout     
    }

    compareLengthArrays(arr1, arr2){        
            return arr1.length === arr2.length;
    }

    sumValuesInTheArray(products){
        let total = 0
        cy.wait(2000).then( () => {
            total = cy.wrap(products.reduce((a, b) => a + b, 0))
         }) 
        return total
    }

    compareValueBeforeTaxes(value1, value2){
        return value1 === value2;
    } 

}

export default cartPage
