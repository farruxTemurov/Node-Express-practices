let dotenv = require("dotenv");
dotenv.config(); // load env variables from .env file
let jwttoken = require("jsonwebtoken");

// this function takes 
// 3 parameters: req, res, next
let authMiddleware = async (req, res, next) => {
    console.log("authMiddleware called....")
    //next();     // pass to another middleware or controller functions.
    //res.send("You can't store product without authentication.") 
    // we need to check if the token present in header or not. 
    let token = req.headers.authorization; // get the token from header.
    console.log("token is: ", token);
    if (token == undefined) {
        res.send("Unauthorized!, you can't call any end points without a token")
    } else {
        try {
            let decode = await jwttoken.verify(token, process.env.MY_TOKEN);
            req.role = decode.role;         // store the role in request object.
            console.log("decode is: ", decode);
            next();
        } catch (error) {
            res.json({ message: "Invalid token", error: error.message });
        }
    }
}

let adminOnly = async (req, res, next) => {
    if (req.role == "admin") {
        next();
    } else {
        res.send("You are not authorized to access this endpoint.")
    }
}
module.exports = {
    authMiddleware, adminOnly
}