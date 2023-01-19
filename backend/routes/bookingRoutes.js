const express = require('express')
const route = express.Router()
const order = require('../models/booking')

route.post('/booking', async(req, res) => {
    // Validate request
    const newBooking = req.body;
    if(JSON.stringify(newBooking) == null || JSON.stringify(newBooking) == '{}') {
        return res.status(400).send({
            message: "Employee content can not be empty"
        });
    }
    else {

    try {
        const booking = new order(newBooking)
        await booking.save()
        res.status(201).send(booking)
    }
    catch(error) {
        res.status(500).send(error)
    }
}
});

//http://mongoosejs.com/docs/api.html#find_find
route.get('/bookings', async(req, res) => {
    try {
        const bookings = await order.find({})
        res.status(200).send(bookings)
    }
    catch(error) {
        res.status(500).send(error)
    }
});


//http://mongoosejs.com/docs/api.html#findbyid_findById
route.get('/bookings/:id', async(req, res) => {
    // Validate request
    let id = req.params.id
    if(JSON.stringify(id) == null || JSON.stringify(id) == '{}') {
        return res.status(400).send({
            message: "Location content can not be empty"
        });
    }
    else {
    
    try {
        const booking = await order.findById(id)
        res.status(200).send(booking)
    }
    catch(error) {
        res.status(500).send(error)
    }
}
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
route.put('/bookings/:id', async(req, res) => {
    // Validate request
    let id = req.params.id
    if(JSON.stringify(id) == null || JSON.stringify(id) == '{}') {
        return res.status(400).send({
            message: "Location's content can not be empty"
        });
    }
    else {
    try {
        console.log(req.body)
        const updatedBooking = await order.findByIdAndUpdate(id, req.body)
        //console.log(updatedBook)
        await updatedBooking.save()
        res.status(202).send(updatedBooking)
      } catch (err) {
        res.status(500).send(err)
      }
    }
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
route.delete('/bookings/:id', async (req, res) => {
    // Validate request
    let id = req.params.id
    if(JSON.stringify(id) == null || JSON.stringify(id) == '{}') {
        return res.status(400).send({
            message: "Location's content can not be empty"
        });
    }
    //TODO - Write your code here to delete the note using
    else {
    try {
        const booking = await order.findByIdAndDelete(id)
    
        if (!location) { 
            res.status(404).send("No item found")
        }
        res.status(204).send(booking)
      } catch (err) {
        res.status(500).send(err)
      }
    }
});
module.exports = route


