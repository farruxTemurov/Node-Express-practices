let productRepository = require("../repositories/products.repository");

let storeProduct = async (product) => {
    // business logic for storing product

    if (product.price < 0) {
        return "Price cannot be negative";
    } else {
        let result = await productRepository.storeProduct(product);
        return result;
    }

}

module.exports = {
    storeProduct
}