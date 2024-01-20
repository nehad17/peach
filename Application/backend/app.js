const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");
const authJwt = require("./helpers/jwt");
const errorHandler = require("./helpers/error-handler");

// Allow communication between backend & frontend
app.use(cors());
app.options("*", cors());
const api = process.env.API_URL;

// Routes
const exercisesRouter = require("./routers/exercises");
const usersRouter = require("./routers/users");
const productsRouter = require("./routers/products");
const activitylevelsRouter = require("./routers/activitylevels");
const wourkoutTemplatesRouter = require("./routers/workouttemplates");
const { restart } = require("nodemon");

// Middleware
app.use(bodyParser.json());
app.use(morgan("tiny"));
// app.use(authJwt); // protect api
app.use(errorHandler);

// Routers
app.use(`${api}/exercises`, exercisesRouter);
app.use(`${api}/users`, usersRouter);
app.use(`${api}/products`, productsRouter);
app.use(`${api}/activitylevels`, activitylevelsRouter);
app.use(`${api}/workouttemplates`, wourkoutTemplatesRouter);

// Database Connection
mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "merge-database",
  })
  .then(() => {
    console.log("Database connected successfully.");
  })
  .catch((err) => {
    console.log(err);
  });

// Server
app.listen(3000, () => {
  console.log(api);
  console.log("server is running http://localhost:3000");
});
