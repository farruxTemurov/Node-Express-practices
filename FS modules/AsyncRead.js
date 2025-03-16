let fs = require("fs");

//1st parameter filename with path
// 2nd parameter callback function which take 2 parameters
// 1st parameter error
// 2nd parameter variable which holds data
fs.readFile("demo1.txt", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString());
    }
});