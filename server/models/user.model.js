import mongoose from "mongoose";

/*
    username: Unique username for this user.
    name: Display name. (Can be the user's real name)
    password: Hashed password.
    quote: Random string that each user can have.
    role: Teacher/Student.
*/

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {type: String, required: true},
    // role: [{student: Boolean, teacher: Boolean}]
  },
  { collection: "user-data" }
);

// Register our schema with mongoose. This model can be accessed anywhere in our code my calling: mongoose.model('User')
const User = mongoose.model('UserData', userSchema)

export default User;
