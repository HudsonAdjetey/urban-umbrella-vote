const mongoose = require("mongoose");

const pollSchema = new mongoose.Schema({
  question: String,
  options: [{}],
  voted: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
  ],
});

const Poll = mongoose.model("Polls", pollSchema);

module.exports = Poll;
