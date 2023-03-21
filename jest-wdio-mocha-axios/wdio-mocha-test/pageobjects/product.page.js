

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $("//span[text()='Products']");
    }
}

module.exports = new ProductsPage();
