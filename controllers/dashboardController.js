const QuizParticipation = require('../models/quizParticipation');
const Quiz = require('../models/quiz');

exports.getDashboardData = async (req, res) => {
  try {
   
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to get dashboard data' });
  }
};
