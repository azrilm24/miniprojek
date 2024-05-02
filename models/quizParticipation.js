const mongoose = require('mongoose');

const quizParticipationSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  quiz_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Quiz',
    required: true
  },
  score: {
    type: Number
  }
});

const QuizParticipation = mongoose.model('QuizParticipation', quizParticipationSchema);

module.exports = QuizParticipation;
