const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const postSchema = new Schema({

    title: String,
    creator: String,
    date: Date

})

const postModel = mongoose.model("postModel", postSchema);

module.exports = postModel