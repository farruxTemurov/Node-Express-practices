let mongoose = require('mongoose');

let MongoDbConnect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/product_db');
        console.log("MongoDB connected successfully");
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    MongoDbConnect
}