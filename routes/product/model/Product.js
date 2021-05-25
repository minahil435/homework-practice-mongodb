
const mongoose = require("mongoose")

const product = new mongoose.Schema({
    Name :{
        type : String,
    },
})

module.exports = mongoose.model("product",product)