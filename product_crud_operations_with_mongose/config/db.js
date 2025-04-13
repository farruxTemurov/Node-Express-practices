let mongoose = require("mongoose");

let MongoDbConnect = async () => {
    try {
        await mongo0se.connect("mongodb://localhost:21017/products_db");
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    MongoDbConnect: MongoDbConnect,

}