const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

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

userSchema.pre("save", async function (next) {
    if (!this.isModified("password" || this.isNew )) return next();
    try {
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt)
    } catch (error) {
        next(error)
    }
    next()
})

const User = mongoose.model("Users", userSchema);

module.exports = User;
