const express = require('express');
const router = express.Router();

const workouts = [
    {
        "name": "Chest/Back",
        "exercises": [
            {
                "name": "Bench Press",
                "sets": [
                    {
                        "reps": 12,
                        "weight": 100
                    },
                    {
                        "reps": 12,
                        "weight": 100
                    },
                    {
                        "reps": 12,
                        "weight": 100
                    }
                ]
            },
            {
                "name": "Lat Pulldown",
                "sets": [
                    {
                        "reps": 12,
                        "weight": 60
                    },
                    {
                        "reps": 12,
                        "weight": 60
                    },
                    {
                        "reps": 12,
                        "weight": 60
                    }
                ]
            },
            {
                "name": "Butterflies",
                "sets": [
                    {
                        "reps": 12,
                        "weight": 15
                    },
                    {
                        "reps": 12,
                        "weight": 15
                    },
                    {
                        "reps": 12,
                        "weight": 15
                    }
                ]
            },
            {
                "name": "Cable Rows",
                "sets": [
                    {
                        "reps": 12,
                        "weight": 60
                    },
                    {
                        "reps": 12,
                        "weight": 60
                    },
                    {
                        "reps": 12,
                        "weight": 60
                    }
                ]
            },
            {
                "name": "Incline Smith Machine",
                "sets": [
                    {
                        "reps": 12,
                        "weight": 40
                    },
                    {
                        "reps": 12,
                        "weight": 40
                    },
                    {
                        "reps": 12,
                        "weight": 40
                    }
                ]
            },
            {
                "name": "Dumbell Rows",
                "sets": [
                    {
                        "reps": 12,
                        "weight": 20
                    },
                    {
                        "reps": 12,
                        "weight": 20
                    },
                    {
                        "reps": 12,
                        "weight": 20
                    }
                ]
            }
        ],
        "burned_calories": 500,
        "duration": 45
    },
    {
        "name": "Biceps/Triceps",
        "exercises": [
            {
                "name": "Barbell Curl",
                "sets": [
                    {
                        "reps": 12,
                        "weight": 20
                    },
                    {
                        "reps": 12,
                        "weight": 20
                    },
                    {
                        "reps": 12,
                        "weight": 20
                    }
                ]
            },
            {
                "name": "Dumbbell Curl",
                "sets": [
                    {
                        "reps": 12,
                        "weight": 15
                    },
                    {
                        "reps": 12,
                        "weight": 15
                    },
                    {
                        "reps": 12,
                        "weight": 15
                    }
                ]
            },
            {
                "name": "Hammer Curl",
                "sets": [
                    {
                        "reps": 12,
                        "weight": 15
                    },
                    {
                        "reps": 12,
                        "weight": 15
                    },
                    {
                        "reps": 12,
                        "weight": 15
                    }
                ]
            },
            {
                "name": "Tricep Pushdown",
                "sets": [
                    {
                        "reps": 12,
                        "weight": 50
                    },
                    {
                        "reps": 12,
                        "weight": 50
                    },
                    {
                        "reps": 12,
                        "weight": 50
                    }
                ]
            },
            {
                "name": "Dips",
                "sets": [
                    {
                        "reps": 12,
                        "weight": 20
                    },
                    {
                        "reps": 12,
                        "weight": 20
                    },
                    {
                        "reps": 12,
                        "weight": 20
                    }
                ]
            },
            {
                "name": "Skull Crushers",
                "sets": [
                    {
                        "reps": 12,
                        "weight": 20
                    },
                    {
                        "reps": 12,
                        "weight": 20
                    },
                    {
                        "reps": 12,
                        "weight": 20
                    }
                ]
            }
        ],
        "burned_calories": 342,
        "duration": 25
    },
    {
    "name": "Legs",
    "exercises": [
        {
            "name": "Squat",
            "sets": [
                {
                    "reps": 12,
                    "weight": 80
                },
                {
                    "reps": 12,
                    "weight": 80
                },
                {
                    "reps": 12,
                    "weight": 80
                }
            ]
        },
        {
            "name": "Deadlift",
            "sets": [
                {
                    "reps": 12,
                    "weight": 100
                },
                {
                    "reps": 12,
                    "weight": 100
                },
                {
                    "reps": 12,
                    "weight": 100
                }
            ]
        },
        {
            "name": "Leg press",
            "sets": [
                {
                    "reps": 12,
                    "weight": 150
                },
                {
                    "reps": 12,
                    "weight": 150
                },
                {
                    "reps": 12,
                    "weight": 150
                }
            ]
        },
        {
            "name": "Lunges",
            "sets": [
                {
                    "reps": 12,
                    "weight": 20
                },
                {
                    "reps": 12,
                    "weight": 20
                },
                {
                    "reps": 12,
                    "weight": 20
                }
            ]
        },
        {
            "name": "Calf raises",
            "sets": [
                {
                    "reps": 12,
                    "weight": 40
                },
                {
                    "reps": 12,
                    "weight": 40
                },
                {
                    "reps": 12,
                    "weight": 40
                }
            ]
        }
    ],
    "burned_calories": 402,
    "duration": 50
    },
    {
        "name": "Shoulders",
        "exercises": [
            {
                "name": "Shoulder Press",
                "sets": [
                    {
                        "reps": 12,
                        "weight": 40
                    },
                    {
                        "reps": 12,
                        "weight": 40
                    },
                    {
                        "reps": 12,
                        "weight": 40
                    }
                ]
            },
            {
                "name": "Lateral raises",
                "sets": [
                    {
                        "reps": 12,
                        "weight": 15
                    },
                    {
                        "reps": 12,
                        "weight": 15
                    },
                    {
                        "reps": 12,
                        "weight": 15
                    }
                ]
            },
            {
                "name": "Front raises",
                "sets": [
                    {
                        "reps": 12,
                        "weight": 15
                    },
                    {
                        "reps": 12,
                        "weight": 15
                    },
                    {
                        "reps": 12,
                        "weight": 15
                    }
                ]
            },
            {
                "name": "Reverse Flys",
                "sets": [
                    {
                        "reps": 12,
                        "weight": 15
                    },
                    {
                        "reps": 12,
                        "weight": 15
                    },
                    {
                        "reps": 12,
                        "weight": 15
                    }
                ]
            },
            {
                "name": "Upright rows",
                "sets": [
                    {
                        "reps": 12,
                        "weight": 20
                    },
                    {
                        "reps": 12,
                        "weight": 20
                    },
                    {
                        "reps": 12,
                        "weight": 20
                    }
                ]
            },
        ],
        "burned_calories": 200,
        "duration": 37
    }
]

/*
// Schema (noch nicht in Verwendung)
const WorkoutSchema = new Schema({
    name: { type: String, required: true },
    exercises: [
        {
            name: { type: String, required: true },
            sets: [
                {
                    reps: { type: Number, required: true },
                    weight: { type: Number, required: true }
                }
            ]
        }
    ],
    burned_calories: { type: Number, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, default: Date.now }
});
*/

// root route
router.get('/', async (req, res) => {
    
    if(!workouts) {
        res.status(500).json({success: false})
    }
    res.send(workouts);})


module.exports = router;