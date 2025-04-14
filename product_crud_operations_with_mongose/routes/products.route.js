let express = require("express");
let router = express.Router();  // Create a new router object
let productController = require("../controllers/products.controller");
// it provides http method details like get, post, put, delete etc.
// it provides sub path and controller method to call.

router.post("/store", productController.storeProduct); // Route to store product
router.get("/findAll", productController.findAllProducts); // Route to find all products
router.get("/search/:pid", productController.searchProductById); // Route to search product by id
router.get("/searchByPrice/:minPrice/:maxPrice", productController.findProductByPriceRange);
router.delete("/delete/:pid", productController.deleteProductById); // Route to delete product by id
router.put("/update/:pid", productController.updateProductPrice); // Route to update product price by id


module.exports = {
    router
}