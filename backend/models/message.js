const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const messageSchema = new Schema({

    text: {
     type: String,
     required: true   
    },
    creator: String,
    date: Date,
    postID: String

})

const messageModel = mongoose.model("messageModel", messageSchema);

module.exports = messageModel