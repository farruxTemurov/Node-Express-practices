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

app.listen(3000, () => {
    console.log('Project is running on port number 3000');
});