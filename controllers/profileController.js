const User = require('../models/user');

exports.getProfile = async (req, res) => {
  try {

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to get user profile' });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update user profile' });
  }
};
