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
    } else {
        let homePage = fs.readFileSync("index.html");
        response.write(homePage);
    }
    response.end();
});

server.listen(3000, () => console.log("Server is running on port number 300"));