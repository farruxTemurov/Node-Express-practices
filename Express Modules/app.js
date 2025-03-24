const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to Express Js");
});

app.get("/about_us", (req, res) => {
    res.sendFile(__dirname + "/about.html")
});

app.get("/index", (req, res) => {
    // res.sendFile("C:\MERN-stack files\Phase 4\Node-Express\Express Modules\index.html"); // sendFile takes the complete path of the file
    res.sendFile(__dirname + "/index.html"); // __dirname means directory of this file
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
}); 