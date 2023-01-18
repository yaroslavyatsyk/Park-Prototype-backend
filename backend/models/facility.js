const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const facilitySchema = new Schema({

    title: String,
    description: String

})

const facilityModel = mongoose.model("facilityModel", facilitySchema);

module.exports = facilityModel