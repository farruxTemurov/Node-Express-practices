let express = require("express");
let app = express();

app.use(express.json()); //middleware to get info from post methods in json format

let products = [
    { pid: 1, name: "Laptop", price: 1000 },
    { pid: 2, name: "Mobile", price: 500 },
    { pid: 3, name: "Tablet", price: 300 }
];

app.get("/findProducts", (req, res) => {
    res.json(products);  // products refer to the products array above
});

// http://localhost:3000/findProductsByIdUsingQueryParam?pid=1
app.get("/findProductsByIdUsingQueryParam", (req, res) => {
    let pid = req.query.pid; //receiving query param value from the url
    let result = products.find((p) => p.pid == pid);
    if (!result) {
        res.json({ "msg": "Product Not Found!" });
    } else {
        res.json(result);
    }
});

// http://localhost:3000/findProductsByIdUsingPathParam/1
app.get("/findProductsByIdUsingPathParam/:pid", (req, res) => {
    let pid = req.params.pid; //receiving query param value from the url 
    let result = products.find((p) => p.pid == pid);
    if (!result) {
        res.json({ "msg": "Product Not Found!" });
    } else {
        res.json(result);
    }
});

// http://localhost:3000/storeProducts
app.post("/storeProducts", (req, res) => {
    let product = req.body;
    let result = products.find((p) => p.pid == product.pid);
    if (result == undefined) {
        products.push(product);
        res.json({ "msg": "Product Stored Successfully!" });
    } else {
        res.json({ "msg": "Product ID must be unique!" });
    }
});

// http://localhost:3000/deleteProducts/1
app.delete("/deleteProducts/:pid", (req, res) => {
    let pid = req.params.pid; //receiving query param value from the url 
    let index = products.findIndex((p) => p.pid == pid);
    if (index == -1) {
        res.json({ "msg": "Product Not Found with id " + pid });
    } else {
        products.splice(index, 1);
        res.json({ "msg": "Prodcut deleted successfully!" });
    }
});

app.listen(3000, () => {
    console.log('Project is running on port number 3000');
});