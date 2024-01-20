const express = require('express');
const router = express.Router();

// MODEL FOR MONGO DB
//  const {Exercise} = require('../models/exercise');

// EXERCISES API
const axios = require("axios");

// root route
router.get('/', async (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises',
        headers: {
          'X-RapidAPI-Key': 'da92b53bbamshecd2ab6466ca07fp12c0bfjsn78ae982e5e6f',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
            res.send(response.data)
          //console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      });

    // OWN MONGO DB
    /*const exercisesList = await Exercise.find();
    if(!exercisesList) {
        res.status(500).json({success: false})
    }
    res.send(exercisesList);*/
})


// Muscle Groups

router.get('/targetList', async (req, res) => {
    const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/targetList',
    headers: {
        'X-RapidAPI-Key': 'da92b53bbamshecd2ab6466ca07fp12c0bfjsn78ae982e5e6f',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        res.send(response.data)
        }).catch(function (error) {
        console.error(error);
    });
})

/*  

// OWN MONGO DB
router.post(`/`, (req, res) => {
    const exercise = new Exercise({
        name: req.body.name,
        image: req.body.image,
        muscleGroup: req.body.muscleGroup
    })
    exercise.save().then((createdExercise => {
        res.status(201).json(createdExercise)
    })).catch((error) => {
        res.status(error.statusCode).send(error.error_description)
    })
    res.send({
        request: "POST",
        success: true,
        createdExercise: exercise
    })
})
*/

module.exports = router;