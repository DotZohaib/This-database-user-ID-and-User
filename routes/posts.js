const mongoose = require('mongoose');

// Post Schema
const postSchema = new mongoose.Schema({
  postText: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a 'User' model to reference
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming each like is associated with a user
  }],
});

module.exports = mongoose.model('Post', postSchema);
