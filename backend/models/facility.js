const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const facilitySchema = new Schema({

    facilityName: {
        
        type: String,
        required: true},
    facilityDescription: String,

    price: {
        type: Number,
        required: true
    },
    

})

const facilityModel = mongoose.model("facilityModel", facilitySchema);

module.exports = facilityModel