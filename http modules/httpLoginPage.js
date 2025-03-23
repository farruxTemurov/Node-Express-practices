let http = require('http');
let url = require('url');
let fs = require('fs');

let server = http.createServer((request, response) => {
    let urlRef = url.parse(request.url, true);
    response.writeHead(200, { "content-type": "text/html" });

    if (urlRef.pathname == "/login") {
        let loginPage = fs.readFileSync("login.html"); //readFileSync is used to read the file synchronously
        response.write(loginPage);

    } else if (urlRef.pathname == "/about_us") {
        let aboutPage = fs.readFileSync("about.html");
        response.write(aboutPage);
    } else if (urlRef.pathname == "/SignIn") {
        let data = urlRef.query;    // extract query information from url
        // if (data.email == "user@gmail.com" && data.password == "user@") {
        //     response.write("<h1> Successful login</h1>");
        // } else {
        //     response.write("<h1> Failure, try once again </h1>");
        // }
        let loginsStringData = fs.readFileSync("login.json", "utf-8");
        let logins = JSON.parse(loginsStringData);
        let result = logins.find(ll => ll.email == data.email && ll.password == data.password);
        if (result != undefined) {
            logins.push(data);
            fs.writeFileSync("login.json", JSON.stringify(logins));
            response.write("<h1> Successful login</h1>");
        } else {
            response.write("<h1> Failure try once again </h1>");
            let loginPage = fs.readFileSync("login.html");
            response.write(loginPage);
        }
    } else if (urlRef.pathname == "/SignUp") {

        let data = urlRef.query;

        let loginsStringData = fs.readFileSync("login.json", "utf-8");
        let logins = JSON.parse(loginsStringData);

        if (logins.length == 0) {
            logins.push(data);
            fs.writeFileSync("login.json", JSON.stringify(logins));
            response.write("<h1>Account Created successfully</h1>");
        } else {
            let result = logins.find(ll => ll.email == data.email);
            if (result == undefined) {
                logins.push(data);
                fs.writeFileSync("login.json", JSON.stringify(logins));
                response.write("<h1>Account Created successfully</h1>");
            } else {
                response.write("<h1>Account already exists</h1>");
            }

        }
        let signUpPage = fs.readFileSync("signup.html");
        response.write(signUpPage);
    } else {
        let homePage = fs.readFileSync("index.html");
        response.write(homePage);
    }
    response.end();
});

server.listen(3000, () => console.log("Server is running on port number 300"));