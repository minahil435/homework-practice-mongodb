
const mongoose = require("mongoose")

const RecipeName = new mongoose.Schema({
    Name :{
        type : String,
    },
})

module.exports = mongoose.model("RecipeName",RecipeName)