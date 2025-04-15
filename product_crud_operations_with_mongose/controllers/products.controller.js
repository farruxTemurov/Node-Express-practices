const req = require("express/lib/request");
let productService = require("../services/products.service");

let storeProduct = async (req, res) => {
    try {
        let product = req.body;   // Get product data from request body
        let result = await productService.storeProduct(product); // Call service to store product
        res.json({ "msg": result })
    } catch (error) {
        console.log("Error in storing product", error);
        res.json({ "msg": error.message });
    }
}
let findAllProducts = async (req, res) => {
    try {
        let products = await productService.findAllProducts();
        res.json(products);
    } catch (error) {

        res.json({ "msg": error.message });
    }
}

let searchProductById = async (req, res) => {
    try {
        let pid = req.params.pid;
        console.log("Product id in controller is ", pid);
        let product = await productService.findProductById(pid);
        if (product) {
            res.json(product);
        } else {
            res.json({ "msg": "Product not found" });
        }
    } catch (error) {

        res.json({ "msg": error.message });
    }
}

let findProductByPriceRange = async (req, res) => {
    try {
        let minPrice = eval(req.params.minPrice);       // converting string to number 
        let maxPrice = eval(req.params.maxPrice);    // converting string to number
        let products = await productService.findProductByPriceUsingRange(minPrice, maxPrice);
        if (products.length > 0) {
            res.json(products);
        } else {
            res.json({ "msg": "Product not found" });
        }
    } catch (error) {
        res.json({ "msg": error.message });
    }
}

let deleteProductById = async (req, res) => {
    try {
        let pid = req.params.pid;
        let result = await productService.deleteProductById(pid);
        if (result) {
            res.json({ "msg": "Product deleted successfully" });
        } else {
            res.json({ "msg": "Product not found" });
        }
    } catch (error) {

        res.json({ "msg": error.message });
    }
}

let updateProductPrice = async (req, res) => {
    try {
        let pid = req.params.pid;
        let newPrice = req.body.price; // Get new price from request body
        let result = await productService.updateProductPrice(pid, newPrice);
        res.json({ "msg": result });

    } catch (error) {
        res.json({ "msg": error.message });
    }
}
module.exports = {
    storeProduct, findAllProducts, searchProductById, findProductByPriceRange, updateProductPrice, deleteProductById
}