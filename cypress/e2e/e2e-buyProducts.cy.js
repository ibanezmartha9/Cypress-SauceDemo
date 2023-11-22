import loginPage from "../pages/loginPage"
import productPage from "../pages/productPage"
import cartPage from "../pages/cartPage"

const login = new loginPage
const product = new productPage
const cart = new cartPage
const loginData = require('../fixtures/login.json')
const productData = require('../fixtures/products.json')
const cartData = require('../fixtures/cart.json')

describe('Testing the main workflow, from login to payment for products', () => {

    beforeEach(() => {
       login.navigateToTheHomePage()   
    })

    it('Buy products with a standard user', function() {
            login.usernameField().type(loginData.username)
            login.passwordField().type(loginData.password)   
            login.loginButton().click()
            product.productLabel().should('be.visible')
            productData.forEach((productData => {
                product.removeButton(productData.locator).should('not.to.exist')
                product.addElementToTheCarButton(productData.locator).click()
                product.removeButton(productData.locator).should('be.exist')
             }))
            product.ShoppingCartButton().click()
            cart.yourCartLabel().should('be.visible')
            cart.checkoutButton().click()
            cart.checkoutInformationLabel().should('be.visible')
            cart.firstNameField().type(cartData.firstName)
            cart.lastNameField().type(cartData.lastName)
            cart.zipPostalCodeField().type(cartData.postalCode)
            cart.continueButton().click()
            cart.checkoutOverviewLabel().should('be.visible')
            cart.finishButton().click()
            cart.thankMessage().should('be.visible')
            cart.backHomeButton().click()
            product.productLabel().should('be.visible')
        })
    
})