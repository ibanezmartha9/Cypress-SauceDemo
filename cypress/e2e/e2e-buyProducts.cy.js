import loginPage from "../pages/loginPage"
import productPage from "../pages/productPage"
import cartPage from "../pages/cartPage"
import product from "../pages/product"
import productDetailsPage from "../pages/productDetailsPage"


const login = new loginPage
const productPag = new productPage
const cart = new cartPage
const loginData = require('../fixtures/login.json')
const cartData = require('../fixtures/cart.json')
const productDetailPage = new productDetailsPage

describe('Testing the main workflow, from login to payment for products', () => {

    beforeEach(() => {
       login.navigateToTheHomePage()   
    })

    it('Buy products with a standard user', function() {
            login.usernameField().type(loginData.username)
            login.passwordField().type(loginData.password)   
            login.loginButton().click()
            productPag.productLabel().should('be.visible') 
            let productsToOPen = 3 
            let productArray = []          
            for(let i = 1; i<=productsToOPen; i++){               
                productPag.openElement(i).click() 
                productDetailPage.backToProductList().should('exist')
                const producto = new product()
                productArray.push(producto)
                productDetailPage.addElementToTheCarButton().click()
                productDetailPage.backToProductList().click()               
            }
            productPag.ShoppingCartButton().click()
            cart.yourCartLabel().should('be.visible')
            cart.checkoutButton().click()
            cart.checkoutInformationLabel().should('be.visible')
            cart.firstNameField().type(cartData.firstName)
            cart.lastNameField().type(cartData.lastName)
            cart.zipPostalCodeField().type(cartData.postalCode)
            cart.continueButton().click()


            // productData.forEach((productData => {
            //     product.removeButton(productData.locator).should('not.to.exist')
            //     product.addElementToTheCarButton(productData.locator).click()
            //     product.removeButton(productData.locator).should('be.exist')
            //  }))
            // p
            // cart.yourCartLabel().should('be.visible')
            // cart.checkoutButton().click()
            // cart.checkoutInformationLabel().should('be.visible')
            // cart.firstNameField().type(cartData.firstName)
            // cart.lastNameField().type(cartData.lastName)
            // cart.zipPostalCodeField().type(cartData.postalCode)
            // cart.continueButton().click()
            // cart.checkoutOverviewLabel().should('be.visible')
            // cart.finishButton().click()
            // cart.thankMessage().should('be.visible')
            // cart.backHomeButton().click()
            // productPage.productLabel().should('be.visible')
        })
    
})