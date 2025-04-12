const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true
  },
  age: {
    type: Number,
    min: [0, 'Age must be positive']
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);
