let productRepository = require("../repositories/products.repository");

let storeProduct = async (product) => {
    if (product.price < 0) {
        return "Price cannot be negative";
    } else {
        let result = await productRepository.storeProduct(product);
        return result;
    }

}

let findAllProducts = async () => {
    let products = await productRepository.findAllProducts();
    let discountProducts = products.map(product => {
        product.price = product.price - (product.price * 0.10);
        return product;
    })
    return discountProducts;
}

let findProductById = async (pid) => {
    let product = await productRepository.findProductById(pid);
    return product;
}

let findProductByPriceUsingRange = async (minPrice, maxPrice) => {
    if (minPrice < 0 || maxPrice < 0) {
        return "Price cannot be negative";
    } else if (minPrice > maxPrice) {
        return "Minimum price cannot be greater than maximum price";

    } else {
        let products = await productRepository.findAllProductsPriceRange(minPrice, maxPrice);
        return products
    }
}

let deleteProductById = async (pid) => {

    let product = await productRepository.deleteProductById(pid);
    console.log("Product in service", product);
    return product;

}

let updateProductPrice = async (pid, newPrice) => {
    // find the product details using pid
    let oldProduct = await productRepository.findProductById(pid);
    //console.log("Old product in service", oldProduct.price);
    //console.log("New product in service", newPrice);
    if (oldProduct) {
        if (newPrice > oldProduct.price) {
            let result = await productRepository.updateProductPrice(pid, newPrice);
            if (result.modifiedCount > 0) {
                return "Product price updated successfully";
            } else {
                return "Product not found";
            }
        } else {
            return "New price should be greater than old price";
        }
    } else {
        return "Product not found";
    }
}

module.exports = {
    storeProduct, findAllProducts, findProductById, findProductByPriceUsingRange, deleteProductById, updateProductPrice
}
