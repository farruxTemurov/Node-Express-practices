let express = require("express");   // load the express module 
let mongoDb = require("mongodb");   // load the mongodb module
let app = express();                // create an express application    

// middleware to parse JSON data from the request body
app.use(express.json());

// database URL 
let url = "mongodb://localhost:27017"; // URL to connect to the database, 27017 is the default port for MongoDB
let dbName = "product_db"; // name of the database to connect to

// connect the mongodb database
let mongoClient = mongoDb.MongoClient; // create a mongoClient object, which provides methods to connect to the database
let db; // variable to hold the database object
// ready to connect to the database 
mongoClient.connect(url).
    then(client => {
        db = client.db(dbName);// connect to the database using the client object
        console.log("Database connected successfully");
    }).
    catch(error => {
        console.log(error);
    });

app.post("/storeProduct", async (req, res) => {
    try {
        let newProduct = req.body; // get the product information from the request body
        console.log(newProduct);
        let result = await db.collection("product").insertOne(newProduct);
        res.json({ "msg": result });
    } catch (error) {
        res.json({ "msg": error });
    }
});

app.get("/findProducts", async (req, res) => {
    try {
        let result = await db.collection("product").find().toArray(); // gets all the products in product collection and converts them into array
        res.json(result);
    } catch (error) {
        res.json({ "msg": error });
    }
});

app.get("/findProductById/:id", async (req, res) => {
    try {
        let pid = req.params.id;
        let result = await db.collection("product").findOne({ _id: Number(pid) });
        if (result == null) {
            res.json({ "msg": "Nothing was Found with this ID" });
        } else {
            res.json(result);
        }
    } catch (error) {
        res.json({ "msg": error });
    }
});

app.delete("/deleteProductById/:id", async (req, res) => {
    try {
        let pid = req.params.id;
        let result = await db.collection("product").deleteOne({ _id: Number(pid) });
        if (result.deletedCount == 1) {
            res.json({ "msg": "Product deleted successfully!" });
        } else {
            res.json({ "msg": "Product Not Found!" });
        }
    } catch (error) {
        res.json({ "msg": error });
    }
});

app.put("/updateProductById/:id", async (req, res) => {
    try {
        let pid = req.params.id;
        let productToUpdate = req.body;
        let result = await db.collection("product").updateOne({ _id: Number(pid) }, { $set: productToUpdate });
        if (result.modifiedCount == 1) {
            res.json({ "msg": "Product updated successfully!" });
        } else if (result.matchedCount == 1) {
            res.json({ "msg": "Product was found but not updated as the new value is the same as the old one" });
        } else {
            res.json({ "msg": "Product Not Found!" });
        }
    } catch (error) {
        res.json({ "msg": error });
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});