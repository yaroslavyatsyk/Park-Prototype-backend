const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const locationSchema = new Schema({
    name: {
        type: String,
        required : true
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }

})

const locationModel = mongoose.model("locationModel", locationSchema);

module.exports = locationModel