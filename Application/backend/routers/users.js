const { User } = require("../models/user");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// root route
router.get("/", async (req, res) => {
  const usersList = await User.find().select("-passwordHash");

  if (!usersList) {
    res.status(500).json({ success: false });
  }
  res.send(usersList);
});

router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id).select("-passwordHash");

  if (!user) {
    res.status(500).json({
      message: "The user with the given ID was not found",
      success: false,
    });
  }
  res.status(200).send(user);
});

router.post("/register", async (req, res) => {
  let user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    passwordHash: bcrypt.hashSync(req.body.password, 10),
    age: req.body.age,
    sex: req.body.sex,
    height: req.body.height,
    weight: req.body.weight,
    goal: req.body.goal,
    activitylevel: req.body.activitylevel,
    workouts: req.body.workouts,
    recommendedMacroNutrients: {
      recommendedCaloricIntake: req.body.recommendedCaloricIntake,
      recommendedProteinIntake: req.body.recommendedProteinIntake,
      recommendedCarbohydratesIntake: req.body.recommendedCarbohydratesIntake,
      recommendedFatIntake: req.body.recommendedFatIntake,
    },
  });
  user = await user.save();

  if (!user) return res.status(400).send("the user cannot be craeted.");

  user
    .save()
    .then((createdUser) => {
      res.status(201).json(createdUser);
      console.log("new user: " + createdUser);
    })
    .catch((error) => {
      res.status(error.statusCode).send(error.error_description);
    });
  res.send({
    request: "POST",
    success: true,
    user: user,
  });
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  const secret = process.env.secret;
  if (!user) {
    return res.status(400).send("The user was not found.");
  }

  if (user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
    const token = jwt.sign(
      {
        userId: user.id,
      },
      secret,
      { expiresIn: "1000m" }
    );
    res.status(200).send({ user: user.email, token: token });
  } else {
    res.status(400).send("Wrong password");
  }
});

module.exports = router;
