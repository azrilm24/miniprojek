const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');

const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Authentication failed. Email or password is incorrect.' });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({ message: 'Authentication failed. Email or password is incorrect.' });
    }

    const token = generateToken(user._id);
    res.json({ token });
  } catch (error) {
    console.error(error); 
    res.status(500).json({ message: 'Internal Server Error' }); 
  }
};

module.exports = { login };
