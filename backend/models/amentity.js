const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const amentitySchema = new Schema({

    amentityName: {
        
        type: String,
        required: true},
    amentityDescription: String,

    price: {
        type: Number,
        required: true
    },
    

})

const amentityModel = mongoose.model("amentityModel", amentitySchema);

module.exports = amentityModel