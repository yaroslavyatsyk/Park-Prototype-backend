const Message = require('./messageModel');

// Create a new message
const createMessage = async (authorId, message) => {
    const newMessage = new Message({
        author: authorId,
        message: message
    });
    await newMessage.save();
    return newMessage;
};

// Get all messages
const getAllMessages = async () => {
    return await Message.find();
};

// Get a message by ID
const getMessageById = async (id) => {
    return await Message.findById(id);
};

// Update a message by ID
const updateMessageById = async (id, update) => {
    return await Message.findByIdAndUpdate(id, update);
};

// Delete a message by ID
const deleteMessageById = async (id) => {
    return await Message.findByIdAndDelete(id);
};