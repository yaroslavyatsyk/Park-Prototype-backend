const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const bookingSchema = new Schema({

    booking_id: String,
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'event',
        required: true
    }],
    facilities: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'facility',
        required: true
    }],
    start_date: Date,
    end_date: Date,

})

const bookingModel = mongoose.model("bookingModel", bookingSchema);

module.exports = bookingModel