let mongose = require("mongose");

let MongoDbConnect = async () => {
    try {
        await mongose.connect("mongodb://localhost:21017/products_db");
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    MongoDbConnect: MongoDbConnect,

}