const express = require("express"); // Setting up Express.
const app = express();
const cors = require("cors"); // Setting up CORS for local developemnt.
const mongoose = require("mongoose"); // Setting up mongoose MongoDB.
const User = require("./models/user.model"); // Our User Mongoose Model
const jwt = require("jsonwebtoken"); // Setting up JSON Web Token

// Sets corrects headers on the response so we can use CORS on localhost.
app.use(cors());

// Parses any request body as a JSON.
app.use(express.json());

// Connect to the DB.
mongoose.connect("mongodb+srv://nx60nwb1yq6VofZZ:swcqmUFo0OSfWnU3@cluster0.21cjg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

// Routes
app.post("/api/register", async (req, res) => {
   -console.log(req.body);
   try {
      await User.create({
         username: req.body.username,
         password: req.body.password,
      });
      res.json({ status: "ok" });
   } catch (err) {
      res.json({ status: "error", error: "Duplicate email" });
   }
});

app.post("/api/login", async (req, res) => {
   console.log(req.body);
   const user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
   });
   if (user) {
      const token = jwt.sign({ username: user.username }, "secret123");

      return res.json({ status: "ok", user: token });
   } else {
      return res.json({ status: "error", user: false });
   }
});

app.listen(1337, () => {
   console.log("Server Started on 1337");
});
