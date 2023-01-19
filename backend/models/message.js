const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const messageSchema = new Schema({

    text: String,
    creator: String,
    date: Date,
    post: String

})

const messageModel = mongoose.model("messageModel", messageSchema);

module.exports = messageModel