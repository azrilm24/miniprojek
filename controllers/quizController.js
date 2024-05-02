const Quiz = require('../models/quiz');

exports.getQuizzes = async (req, res) => {
  try {

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to get quizzes' });
  }
};
