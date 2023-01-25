const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const parkSchema = new Schema({

    parkName: {
        type: String,
        required: true 
    },
    desription: {
       type: String 
    },
    users : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }],
    facilities : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'facilityModel',
        required: true
    }],

    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'locationModel',
        required: true
    }

})

const parkModel = mongoose.model("parkModel", parkSchema);

module.exports = parkModel

