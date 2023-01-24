const express = require('express')
const route = express.Router()
const loc = require('../models/location')

route.post('/locations', async(req, res) => {
    // Validate request
    const newLocation = req.body;
    if(JSON.stringify(newLocation) == null || JSON.stringify(newLocation) == '{}') {
        return res.status(400).send({
            message: "Location content can not be empty"
        });
    }
    else {

    try {
        const location = new loc(newLocation)
        await location.save()
        res.status(201).send(location)
    }
    catch(error) {
        res.status(500).send(error)
    }
}
});

//http://mongoosejs.com/docs/api.html#find_find
route.get('/locations', async(req, res) => {
    try {
        const locations = await loc.find({})
        res.status(200).send(locations)
    }
    catch(error) {
        res.status(500).send(error)
    }
});


//http://mongoosejs.com/docs/api.html#findbyid_findById
route.get('/locations/:id', async(req, res) => {
    // Validate request
    let id = req.params.id
    if(JSON.stringify(id) == null || JSON.stringify(id) == '{}') {
        return res.status(400).send({
            message: "Location content can not be empty"
        });
    }
    else {
    
    try {
        const location = await loc.findById(id)
        res.status(200).send(location)
    }
    catch(error) {
        res.status(500).send(error)
    }
}
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
route.put('/locations/:id', async(req, res) => {
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
        const updatedLocation = await loc.findByIdAndUpdate(id, req.body)
        //console.log(updatedBook)
        await updatedLocation.save()
        res.status(202).send(updatedLocation)
      } catch (err) {
        res.status(500).send(err)
      }
    }
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
route.delete('/locations/:id', async (req, res) => {
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
        const location = await loc.findByIdAndDelete(id)
    
        if (!location) { 
            res.status(404).send("No item found")
        }
        res.status(204).send(location)
      } catch (err) {
        res.status(500).send(err)
      }
    }
});
module.exports = route


