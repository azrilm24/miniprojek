const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: 'minibackend',
        description: 'Backend Project',
        version: '1.0.0',
      },
    },
    apis: ['./routes/*.js'], 
  };
  
  module.exports = swaggerOptions;
  