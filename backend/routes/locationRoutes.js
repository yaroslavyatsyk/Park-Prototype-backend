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


route.get('/locations', async(req, res) => {
    try {
        const locations = await loc.find({})
        res.status(200).send(locations)
    }
    catch(error) {
        res.status(500).send(error)
    }
});



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
        await updatedLocation.save()
        res.status(202).send(updatedLocation)
      } catch (err) {
        res.status(500).send(err)
      }
    }
});


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


