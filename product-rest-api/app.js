let express = require("express");
let app = express();

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


app.listen(3000, () => {
    console.log('Project is running on port number 3000');
});