const LoginPage = require('../pageobjects/login.page')
const ProductPage = require('../pageobjects/product.page')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(ProductPage.flashAlert).toBeExisting()
        await expect(ProductPage.flashAlert).toHaveTextContaining(
            'Products')
    })
})


