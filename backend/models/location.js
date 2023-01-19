const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const locationSchema = new Schema({
    latitude : Number,
    longitude: Number

})

const locationModel = mongoose.model("locationModel", locationSchema);

module.exports = locationModel