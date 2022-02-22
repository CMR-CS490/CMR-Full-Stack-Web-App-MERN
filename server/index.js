// import User from "./models/user.model.js" // Our User Mongoose Model

import jwt from "jsonwebtoken" // Setting up JSON Web Token for user Auths. Used to determine if a user is legit.
import bcrypt from "bcryptjs" // Used for hashing things a DB.
import express from 'express'; 
// import bodyParser from 'body-parser';
import mongoose from 'mongoose' // Setting up mongoose MongoDB.
import cors from 'cors'; // Setting up CORS for local developemnt.

import testRoutes from './routes/tests.js';
import User from './models/user.model.js';
const app = express(); // Init Express as "app"

// Parses any request body as a JSON by default.
app.use(express.json());

// Sets corrects headers on the response so we can use CORS on localhost. (Probably not needed in Production.)
app.use(cors());

// Every route in the /rouets/tests.js routes will start with /tests and append with whatever urls are in the /routes/tests.js
app.use('/tests', testRoutes);


const CONNECTION_URL = "mongodb+srv://nx60nwb1yq6VofZZ:swcqmUFo0OSfWnU3@cluster0.21cjg.mongodb.net/project490db?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5002; // Heroku will automatically populate this process.env.PORT

// Connect to the DB.
mongoose.connect( CONNECTION_URL , { useNewUrlParser: true, useUnifiedTopology: true} )
   .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
   .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);




// Routes
app.post("/api/register", async (req, res) => {
   console.log(req.body);
   try {
      const newPassword = await bcrypt.hash(req.body.password, 10) // Hashed password.
      // Create the user in the MongoDB Database.
      await User.create({
         username: req.body.username,
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

   if(!user) { return res.json({ status: "error", user: false });}

   const isPasswordValid = await bcrypt.compare(req.body.password, user.password)

   if (user && isPasswordValid) {
      // Sign the token with a secret of the private key.
      const token = jwt.sign({ username: user.username }, "secret123");

      return res.json({ status: "ok", user: token, role: user.role, username: user.username });
   } else {
      return res.json({ status: "error", user: false });
   }
});

// app.listen(1337, () => {
//    console.log("Server Started on 1337");
// });
