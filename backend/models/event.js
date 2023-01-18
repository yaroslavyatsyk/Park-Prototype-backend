const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({

    date: Date,
    title: String,
    description: String

})

const eventModel = mongoose.model("eventModel", eventSchema);

module.exports = eventModel