const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema({

    user_id: String,
  username: String,
   post: String,
   thread_id: String,
   thread_title: String

})

const chatModel = mongoose.model("chatModel", chatSchema);

module.exports = chatModel