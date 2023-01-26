const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({

    date: {type: Date, default: Date.now},
    title: {type: String, required: true},
    description: String

})

const eventModel = mongoose.model("eventModel", eventSchema);

module.exports = eventModel;