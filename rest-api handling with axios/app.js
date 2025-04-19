let axios = require("axios");

let loadFakeData = async () => {
    let response = await axios.get("https://fakestoreapi.com/products");
    let products = await response.data;
    console.log(products);
}

loadFakeData();