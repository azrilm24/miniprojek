const QuizParticipation = require('../models/quizParticipation');

exports.getQuizRanking = async (req, res) => {
  try {
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to get quiz ranking' });
  }
};
