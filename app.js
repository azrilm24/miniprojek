const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('./middlewares/errorHandler');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = require('./swaggerOptions');
const app = express();
const PORT = process.env.PORT || 3000;
const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(bodyParser.json());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/profile', require('./routes/profileRoutes'));
app.use('/api/quiz', require('./routes/quizRoutes'));
app.use('/api/ranking', require('./routes/rankingRoutes'));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
