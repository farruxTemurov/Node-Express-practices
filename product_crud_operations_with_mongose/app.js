let express = require("express");
let dbConnect = require("./config/db");
let app = express();

app.listen(3000, () => {
    console.log("Server is running on port 3000");
    dbConnect.MongoDbConnect(); // calling db file function to connect to MongoDB
})