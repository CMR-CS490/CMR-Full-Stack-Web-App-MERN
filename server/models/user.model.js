const mongoose = require("mongoose");

/*
    username: Unique username for this user.
    name: Display name. (Can be the user's real name)
    password: Hashed password.
    quote: Random string that each user can have.
    role: Teacher/Student.
*/

const User = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    password: { type: String, required: true },
    role: {type: String, required: true},
    quote: { type: String },
    // role: [{student: Boolean, teacher: Boolean}]
  },
  { collection: "user-data" }
);

// Register our schema with mongoose. This model can be accessed anywhere in our code my calling: mongoose.model('User')
const model = mongoose.model('UserData', User)

module.exports = model
