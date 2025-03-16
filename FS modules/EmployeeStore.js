let fs = require("fs");

let emp = { id: 102, name: "John", age: 26 };
fs.writeFileSync("demo1.txt", JSON.stringify(emp));