let express = require("express");
let router = express.Router();
let userController = require("../controllers/users.controller");


router.post("/signUp", userController.signUp);
router.post("/signIn", userController.signIn);

module.exports = {
    router
}