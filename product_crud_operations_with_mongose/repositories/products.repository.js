let productModel = require('../models/products.model');        // ES5 style import of productModel
let mongoose = require('mongoose');
// this file contains more than one function with pure database logic. 
let storeProduct = async (product) => {
    let newProduct = new productModel(product);
    let result = await newProduct.save();
    return result;
}

module.exports = {
    storeProduct
}