const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const facilitySchema = new Schema({

    facilityName: {
        
        type: String,
        required: true},
    facilityDescription: String

})

const facilityModel = mongoose.model("facilityModel", facilitySchema);

module.exports = facilityModel