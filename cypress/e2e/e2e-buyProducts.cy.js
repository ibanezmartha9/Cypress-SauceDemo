import loginPage from "../pages/loginPage"
import productPage from "../pages/productPage"
import cartPage from "../pages/cartPage"
import productToAdd from "../pages/productToAdd"

const login = new loginPage
const productPag = new productPage
const cart = new cartPage
const loginData = require('../fixtures/login.json')
const cartData = require('../fixtures/cart.json')

describe('Testing the main workflow, from login to payment for products', () => {

    beforeEach(() => {
       login.navigateToTheHomePage()   
    })

    it('Buy products with a standard user', function() {
            login.usernameField().type(loginData.username)
            login.passwordField().type(loginData.password)   
            login.loginButton().click()
            productPag.productLabel().should('be.visible') 
            let productsToAddToTheCartArray = []
            let productsToselect = 2
            for(let i = 0; i<=productsToselect; i++){ 
                const product = new productToAdd(i) 
                productsToAddToTheCartArray.push(product)
                productPag.addProductToTheCart(i)                          
            }
            cy.log(productsToAddToTheCartArray)
            // productsToAddToTheCartArray.forEach(
            //     product => cy.log(product.itemname)
            //)
            productPag.ShoppingCartButton().click()
            cart.yourCartLabel().should('be.visible')
            cart.checkoutButton().click()
            cart.checkoutInformationLabel().should('be.visible')
            cart.firstNameField().type(cartData.firstName)
            cart.lastNameField().type(cartData.lastName)
            cart.zipPostalCodeField().type(cartData.postalCode)
            cart.continueButton().click()
            cart.checkoutOverviewLabel().should('be.visible')
            cart.verifyItemsInCheckout(productsToAddToTheCartArray)
        })
    
})