const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const postSchema = new Schema({

    title: {type: String, required: true},
    users : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }],
    date: Date

})

const postModel = mongoose.model("postModel", postSchema);

module.exports = postModel