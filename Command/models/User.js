const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userId: String,
  guildId: String,

  xp: {
    type: Number,
    default: 0
  },

  level: {
    type: Number,
    default: 1
  },

  messages: {
    type: Number,
    default: 0
  },

  voiceTime: {
    type: Number,
    default: 0
  },

  coins: {
    type: Number,
    default: 0
  },

  achievements: {
    type: Array,
    default: []
  }
});

module.exports = mongoose.model("User", userSchema);
