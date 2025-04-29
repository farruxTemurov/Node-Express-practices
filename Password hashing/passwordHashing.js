let bcryptjs = require("bcryptjs");
let password = "password@001";

function encryptPassword(password) {
    let salt = bcryptjs.genSaltSync(8); // by default strength 10 is considered
    console.log(salt);
    let hash = bcryptjs.hashSync(password, salt);
    console.log(hash);
    return hash;
}

let hashedPassword = encryptPassword(password);
let comparingPassword = "password@001";

let isMatch = bcryptjs.compareSync(comparingPassword, hashedPassword);
if (isMatch) {
    console.log("Password matched");
} else {
    console.log("Password doesn't match");
}