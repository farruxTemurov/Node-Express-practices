let http = require("http");
let url = require("url");

let server = http.createServer((req, res) => {
    let urlRef = url.parse(req.url, true);
    res.writeHead(200, { "content-type": "text/html" });

    if (urlRef.pathname == "/about_us") {
        res.write("<p>Welcome to About Us page</p>");
        res.write("<h2>About Us Page Description</h2>");
    } else if (urlRef.pathname == "/services") {
        res.write("<p>Welcome to Services page</p>");
        res.write("<h2>Services Description</h2>");
    } else {    
        res.write("<h2>Home Page</h2>");
        res.write("<p>Welcome to Home page</p>");
    }

    res.end();
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});