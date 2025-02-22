const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['user', 'admin', 'superadmin'],
    default: 'user'
  },
  fullName: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: String
  },
  address: {
    type: String
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
