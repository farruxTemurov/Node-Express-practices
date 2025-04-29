let express = require("express");
let dbConnect = require("./config/db");
let dotenv = require("dotenv");
dotenv.config();
let app = express();

let PORT = process.env.PORT || 9090;
let userRoutes = require("./routes/users.route");
let productRoutes = require("./routes/products.route");

// middleware
app.use(express.json()); // Parse JSON request body

// http://localhost:3000/api/products/*
app.use("/api/products", productRoutes.router); // Use the product routes for the API
app.use("/api/login", userRoutes.router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    dbConnect.MongoDbConnect(); // calling db file function to connect to MongoDB
})