let jwttoken = require("jsonwebtoken");
let myKey = "myKey";

let payloadData = { // payload is information about the user (email, role)
    "emailid": "user@gmail.com",   // value can be dynamic 
    "role": "user",
}

let token = jwttoken.sign(payloadData, myKey, { expiresIn: '1m' })

console.log("Token: ", token);

// verify the token to call any end point 
try {
    let verifyToken = jwttoken.verify(token, myKey);
    console.log("Verify Token: ", verifyToken);
    if (verifyToken.role == "admin") {
        console.log("Admin Token");
    } else if (verifyToken.role == "user") {
        console.log("User Token");
    } else {
        console.log("Guest Token");
    }
} catch (error) {
    console.log(error);
}
