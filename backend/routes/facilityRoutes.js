const express = require('express')
const route = express.Router()
const equipment = require('../models/facility')

route.post('/facilities', async(req, res) => {
    const newFacility = req.body;
    if(JSON.stringify(newFacility) == null || JSON.stringify(newFacility) == '{}') {
        return res.status(400).send({
            message: "facility's content can not be empty"
        });
    }
    else {

    try {
        const item = new equipment(newLocation)
        await item.save()
        res.status(201).send(item)
    }
    catch(error) {
        res.status(500).send(error)
    }
}
});

route.get('/facilities', async(req, res) => {
    try {
        const facilities = await equipment.find({})
        res.status(200).send(facilities)
    }
    catch(error) {
        res.status(500).send(error)
    }
});
route.get('/facilities/', async(req, res) => {
    let keyword = req.query.keyword

    if(JSON.stringify(keyword) == null || JSON.stringify(keyword) == '{}') {
        return res.status(400).send({
            message: "Facility's keyword can not be empty"
        });
    }
    else {
    try {
        const facilities = await equipment.find({ $or: [{facilityName: `/^${keyword} `}, {facilityName: `/${keyword} $/`}, {facilityName: `/ ${keyword} /`}
    , {facilityName: `/^${keyword}`}, {facilityName: `${keyword}$/`}, {facilityName: `/${keyword}/`}]})
        res.status(200).send(facilities)
    }
    catch(error) {
        res.status(500).send(error)
    }
}
});


route.get('/facilities/:id', async(req, res) => {

    let id = req.params.id
    if(JSON.stringify(id) == null || JSON.stringify(id) == '{}') {
        return res.status(400).send({
            message: "Facility content can not be empty"
        });
    }
    else {
    
    try {
        const item = await equipment.findById(id)
        res.status(200).send(item)
    }
    catch(error) {
        res.status(500).send(error)
    }
}
});


route.put('/facilities/:id', async(req, res) => {

    let id = req.params.id
    if(JSON.stringify(id) == null || JSON.stringify(id) == '{}') {
        return res.status(400).send({
            message: "Facilities's content can not be empty"
        });
    }
    else {
    try {
        console.log(req.body)
        const updatedInventory = await equipment.findByIdAndUpdate(id, req.body)
    
        await updatedInventory.save()
        res.status(202).send(updatedInventory)
      } catch (err) {
        res.status(500).send(err)
      }
    }
});


route.delete('/facilities/:id', async (req, res) => {
    // Validate request
    let id = req.params.id
    if(JSON.stringify(id) == null || JSON.stringify(id) == '{}') {
        return res.status(400).send({
            message: "Facilities's content can not be empty"
        });
    }

    else {
    try {
        const facility = await equipment.findByIdAndDelete(id)
    
        if (!facility) { 
            res.status(404).send("No item found")
        }
        res.status(204).send(facility)
      } catch (err) {
        res.status(500).send(err)
      }
    }
});
module.exports = route

