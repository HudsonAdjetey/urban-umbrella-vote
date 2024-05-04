const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// creating the user

const User = mongoose.model("Users", userSchema);

module.exports = User;
