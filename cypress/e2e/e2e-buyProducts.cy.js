import loginPage from "../pages/loginPage"
import productPage from "../pages/productPage"

const login = new loginPage
const product = new productPage
const loginData = require('../fixtures/login.json')
const productData = require('../fixtures/products.json')

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
        })
    
})