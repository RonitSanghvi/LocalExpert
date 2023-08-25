const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        required: true,
        type:String
    },
    email:{
        required: true,
        type:String
    },
    password:{
        required: true,
        type:String
    },
    favorites:{
        required: false,
        type: Array
    }
})

module.exports = mongoose.model("user", userSchema)