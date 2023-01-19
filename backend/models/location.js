const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const locationSchema = new Schema({
    latitude : {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    }

})

const locationModel = mongoose.model("locationModel", locationSchema);

module.exports = locationModel