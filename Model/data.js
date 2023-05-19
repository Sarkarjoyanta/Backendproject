const mongoose = require("mongoose");

const {Schema} = mongoose;

const mySchema = new Schema({
    name:{
        type: String
    },
    email:{
        type: String,
        required: true,
    },
    subject:{
        type: String,
    },
    password:{
        type: String,
        required: true,
    },
    verified:{
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model("Detail", mySchema);