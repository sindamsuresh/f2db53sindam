const mongoose = require("mongoose")
const mercedesBenzSchema = mongoose.Schema({
    carModel: {
        type: String,
        minLength: 4,
        maxLength: 15
    },
    carPrice: Number,
    carColor: {
        type: String,
        minLength: 3,
        maxLength: 15
    },
})

module.exports = mongoose.model("MercedesBenz", mercedesBenzSchema)
