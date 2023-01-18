const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const bookingSchema = new Schema({

    booking_id: String,
    user_id: String,
    facility: String,
    start_date: Date,
    end_date: Date,

})

const bookingModel = mongoose.model("bookingModel", bookingSchema);

module.exports = bookingModel