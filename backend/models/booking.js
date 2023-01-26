const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const bookingSchema = new Schema({

    booking_id: String,
    facilities: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'facilityModel',
        required: true
    }],

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },

    booking_date: {type: Date, default: Date.now}

})

const bookingModel = mongoose.model("bookingModel", bookingSchema);

module.exports = bookingModel