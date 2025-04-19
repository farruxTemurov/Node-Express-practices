let axios = require("axios");
let express = require("express");

let app = express();

app.get("/products", async (req, res) => {
    let response = await axios.get("https://fakestoreapi.com/products");
    let products = await response.data;
    res.json(products);
})


// let loadFakeData = async () => {
//     let response = await axios.get("https://fakestoreapi.com/products");
//     let products = await response.data;
//     console.log(products);
// }

// loadFakeData();

app.listen("3000", () => {
    console.log("App is running on port 3000");
});