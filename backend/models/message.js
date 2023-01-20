const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const messageSchema = new Schema({

    text: {
     type: String,
     required: true   
    },
    users : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }],
    date: Date,
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post',
        required: true
    }]

})

const messageModel = mongoose.model("messageModel", messageSchema);

module.exports = messageModel