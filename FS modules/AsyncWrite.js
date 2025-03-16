let fs = require('fs');
console.log("module loaded successfully");
let data = "Today we are learning Node.js";

// fs.writeFile() takes 3 parameters
// 1st parameter filename with path
// 2nd parameter data to be written or message 
// 3rd parameter callback function which take 2 parameters
fs.appendFile('demo1.txt', data, (err) => { // fs.writeFile will override previous data
    if (err) {
        console.log(err);
    }
    else {
        console.log("Data stored in a file");
    }
});

fs.writeFileSync('demo1.txt', data);
console.log("1st message");
console.log("2nd message");