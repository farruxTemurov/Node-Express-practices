let axios = require("axios");
let express = require("express");

let app = express();

let products;

app.get("/products", async (req, res) => {
    res.json(products);
});

app.get("/findProduct/:pid", async (req, res) => {
    let pid = req.params.pid;

    let product = products.find(p => p.id == pid);
    if (product == undefined) {
        res.resd("Product Not Found");
    } else {
        res.json({ "msg": "title " + product.title + "price " + product.price });
    }
    res.json(products);
});

// let loadFakeData = async () => {
//     let response = await axios.get("https://fakestoreapi.com/products");
//     let products = await response.data;
//     console.log(products);
// }

// loadFakeData();

app.listen("3000", async () => {
    console.log("App is running on port 3000");
    let response = await axios.get("https://fakestoreapi.com/products");
    products = response.data;
    console.log("products fetched from api " + products.length);
});