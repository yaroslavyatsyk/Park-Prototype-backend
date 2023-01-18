const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const locationSchema = new Schema({

    longitude: Number,
    latitude: Number

})

const locationModel = mongoose.model("locationModel", locationSchema);

module.exports = locationModel