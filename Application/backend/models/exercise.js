const mongoose = require('mongoose');

const exerciseSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String, // url of image
        required: true
    },
    muscleGroup: {
        type: String,
        required: true
    },
})

exports.Exercise = mongoose.model('Exercise', exerciseSchema);