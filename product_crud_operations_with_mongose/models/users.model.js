let mongoose = require('mongoose');
// provide the schema for the user model
let userSchema = mongoose.Schema({   // _id,email,password, role (admin/customer), etc 
    email: {
        type: String,
        required: true,
        unique: true,                // unique key for email
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["admin", "customer"],
        default: "customer"
    }
})
// using schema create a model
let userModel = mongoose.model("users", userSchema);    // users is the collection name in MongoDB
module.exports = userModel;
