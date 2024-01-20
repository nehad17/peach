const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  height: {
    // in cm
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  goal: {
    type: String,
    required: true,
  },
  activitylevel: {
    type: String,
    required: true,
  },
  foodItems: [
    {
      date: {
        type: Date,
        required: true,
      },
      items: [
        {
          name: {
            type: String,
            required: true,
          },
          macronutrients: {
            protein: {
              type: Number,
              required: true,
            },
            carbohydrates: {
              type: Number,
              required: true,
            },
            fat: {
              type: Number,
              required: true,
            },
          },
        },
      ],
    },
  ],
  workouts: [
    {
      name: { type: String, required: true },
      exercises: [
        {
          name: { type: String, required: true },
          sets: [
            {
              reps: { type: Number, required: true },
              weight: { type: Number, required: true },
            },
          ],
        },
      ],
      burned_calories: { type: Number /*, required: true*/ },
      duration: { type: Number /*, required: true */ },
      date: { type: Date, default: Date.now },
    },
  ],

  recommendedMacroNutrients: {
    recommendedCaloricIntake: {
      type: Number,
      required: true,
    },
    recommendedProteinIntake: {
      type: Number,
      required: true,
    },
    recommendedCarbohydratesIntake: {
      type: Number,
      required: true,
    },
    recommendedFatIntake: {
      type: Number,
      required: true,
    },
  },
});

usersSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

usersSchema.set("toJSON", {
  virtuals: true,
});

exports.User = mongoose.model("User", usersSchema);
