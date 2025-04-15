let productModel = require('../models/products.model');        // ES5 style import of productModel
let mongoose = require('mongoose');
// this file contains more than one function with pure database logic. 
let storeProduct = async (product) => {
    let newProduct = new productModel(product);
    let result = await newProduct.save();
    return result;
}

let findAllProducts = async () => {

    let products = await productModel.find();  // find() is a pre defined method in mongoose to find all documents in a collection 
    return products;

}

let findProductById = async (pid) => {

    let p_id = new mongoose.Types.ObjectId(pid); // converts string to ObjectId
    let product = await productModel.findById(p_id); // findById() is a pre defined method in mongoose to find a document by id
    return product;

}

let findAllProductsPriceRange = async (minPrice, maxPrice) => {
    let products = await productModel.find({ $and: [{ price: { $gte: minPrice } }, { price: { $lte: maxPrice } }] });
    return products;

}

let deleteProductById = async (pid) => {
    let p_id = new mongoose.Types.ObjectId(pid); 
    let product = await productModel.findByIdAndDelete(p_id);
    // let product = await productModel.deleteOne({_id:p_id});
    //let product = await productModel.deleteMany({price:price})
    return product;
}

let updateProductPrice = async (pid, newPrice) => {
    let p_id = new mongoose.Types.ObjectId(pid);
    let result = await productModel.updateOne({ _id: p_id }, { $set: { price: newPrice } }); 
    //let result = await productModel.updateMany({name:nameValue},{$set:{price:newPrice}});
    return result;
}

module.exports = {
    storeProduct, findAllProducts, findProductById, findAllProductsPriceRange, deleteProductById, updateProductPrice
}