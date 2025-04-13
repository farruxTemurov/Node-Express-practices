let mongoose = require('mongoose');
let productSchema = mongoose.Schema({   // _id,pname,price,quantity(0),description(optional)
    pname: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        default: 0
    },
    description: {
        type: String,
        required: false
    }
})
// using schema create a model
let productModel = mongoose.model("products", productSchema);    // products is the collection name in MongoDB

module.exports = productModel
