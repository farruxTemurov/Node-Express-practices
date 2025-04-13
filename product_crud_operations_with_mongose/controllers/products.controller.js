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

module.exports = {
    storeProduct
}