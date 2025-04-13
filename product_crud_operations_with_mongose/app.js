let express = require("express");
let dbConnect = require("./config/db");
let app = express();

let productRoutes = require("./routes/products.route");

// middleware
app.use(express.json()); // Parse JSON request body



// main path for the API 
// http://localhost:3000/api/products/*
app.use("/api/products", productRoutes.router); // Use the product routes for the API



app.listen(3000, () => {
    console.log("Server is running on port 3000");
    dbConnect.MongoDbConnect(); // calling db file function to connect to MongoDB
})