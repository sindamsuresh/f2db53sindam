const mongoose = require("mongoose")
const mercedesBenzSchema = mongoose.Schema({
    carModel: String,
    carPrice: Number,
    carColor: String
})

module.exports = mongoose.model("MercedesBenz", mercedesBenzSchema)
