const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const bookingSchema = new Schema({

    booking_id: String,
    facilities: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'facilityModel',
        required: true
    }],
    start_date: Date,
    end_date: Date,

})

const bookingModel = mongoose.model("bookingModel", bookingSchema);

module.exports = bookingModel