const mongoose = require("mongoose")

const destinationSchema = new mongoose.Schema({
    name:{
        required: true,
        type:String
    },
    country:{
        required: true,
        type:String
    },
    state:{
        required: true,
        type:String
    },
    city:{
        required: true,
        type:String
    },
    description:{
        required: true,
        type:String
    },
    writer:{
        required: true,
        type:String
    },
    image:{
        required: true,
        type:String
    }
})

module.exports = mongoose.model("destination", destinationSchema)