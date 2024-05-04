const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  polls: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Polls",
    },
  ],
});

// creating the user

const User = mongoose.model("Users", userSchema);

module.exports = User;
