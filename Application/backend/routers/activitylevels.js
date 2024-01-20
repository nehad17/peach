const express = require('express');
const router = express.Router();
const activity_levels = [

    {
      "name": "Sedentary",
      "description": "Work at a desk job, don't do much housework, walking, or exercising."
    },

    {
      "name": "Lightly active",
      "description": "Don't exercise much, but go for walks 1-3 times per week and are on feet doing housework during some of the day."
    },

    {
      "name": "Moderately active",
      "description": "Exercise 3-5 times a week and stay moving throughout the day with non-exercise activities."
    },

    {
      "name": "Very active",
      "description": "Exercise intensely or play vigorous sports on most days."
    },

    {
      "name": "Extra active",
      "description": "Exercise intensely or play vigorous sports nearly every day, including occasional 'two a day'. Also work a physical job or on feet most of the time."
    }
]

// root route
router.get('/', async (req, res) => {
    if(!activity_levels) {
        res.status(500).json({success: false})
    }
    res.send(activity_levels);
})

module.exports = router;