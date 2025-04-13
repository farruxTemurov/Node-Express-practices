let express = require("express");
let router = express.Router();  // Create a new router object
let productController = require("../controllers/products.controller");
// it provides http method details like get, post, put, delete etc.
// it provides sub path and controller method to call.

router.post("/store",productController.storeProduct); // Route to store product

module.exports={
    router
}