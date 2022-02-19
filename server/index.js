const express = require("express"); // Setting up Express.
const app = express(); // Init Express as "app"
const cors = require("cors"); // Setting up CORS for local developemnt.
const mongoose = require("mongoose"); // Setting up mongoose MongoDB.
const User = require("./models/user.model"); // Our User Mongoose Model
const jwt = require("jsonwebtoken"); // Setting up JSON Web Token for user Auths. Used to determine if a user is legit.
const bcrypt = require('bcryptjs'); // Used for hashing things a DB.

// Sets corrects headers on the response so we can use CORS on localhost. (Probably not needed in Production.)
app.use(cors());

// Parses any request body as a JSON by default.
app.use(express.json());

// Connect to the DB.
mongoose.connect("mongodb+srv://nx60nwb1yq6VofZZ:swcqmUFo0OSfWnU3@cluster0.21cjg.mongodb.net/project490db?retryWrites=true&w=majority");

// Routes
app.post("/api/register", async (req, res) => {
   console.log(req.body);
   try {
      const newPassword = await bcrypt.hash(req.body.password, 10) // Hashed password.
      // Create the user in the MongoDB Database.
      await User.create({
         username: req.body.username,
         first_name: req.body.first_name,
         last_name: req.body.last_name,
         password: newPassword,
         role: req.body.role,
      });
      res.json({ status: "ok" });
   } catch (err) {
      // Any error in the creation in the DB will return this error to the client.
      res.json({ status: "error", error: "Duplicate username" });
   }
});

app.post("/api/login", async (req, res) => {
   
   console.log("Incoming Login Credentials:", req.body);
   // Find the user with this username and password.
   const user = await User.findOne({
      username: req.body.username,
      // password: req.body.password, Unhashed
   });

   if(!user) { return {status: 'error', error: 'Invalid login' }}

   const isPasswordValid = await bcrypt.compare(req.body.password, user.password)

   if (user) {
      // Sign the token with a secret of the private key.
      const token = jwt.sign({ username: user.username }, "secret123");

      return res.json({ status: "ok", user: token });
   } else {
      return res.json({ status: "error", user: false });
   }
});

// Creation of the Quote
app.post('/api/quote', async (req, res) => {
   
   // Perform authentication first.
   const token = req.headers['x-access-token']

   try {
      // Verfies that the token is correct.
      const decoded = jwt.verify(token, 'secret123')
      const username = decoded.username;

      // Find the user with the unique username found in the JWT token.
      const user = await User.updateOne({ username: username }, { $set: { quote: req.body.quote }})
      return res.json({ status: 'ok' })

   } catch (error) {
      console.log(error)
      res.json({ status: 'error', error: 'invalid token' })
   }
})

app.get('/api/quote', async (req, res) => {
   
   // Perform authentication first.
   const token = req.headers['x-access-token']

   try {
      // Verfies that the token is correct.
      const decoded = jwt.verify(token, 'secret123')
      const username = decoded.username;

      // Find the user with the unique username found in the JWT token.
      const user = await User.findOne({ username: username })
      return res.json({ status: 'ok', username: user.username, quote: user.quote })

   } catch (error) {
      console.log(error)
      res.json({ status: 'error', error: 'invalid token' })
   }
})

app.listen(1337, () => {
   console.log("Server Started on 1337");
});
