const swaggerConfig = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'i4Digital API Rest Technical Test',
      version: '1.0.0',
      description: `API Rest developed for 14digital as a solution for their technical test`,
    },
    servers: [
      {
        url: `http://localhost:port/api/v1/docs`,
        description: 'Url to use in development',
      },
      {
        url: 'https://i4digital-api-technical-test.herokuapp.com/api/v1/docs',
        description: 'Url to use in production',
      },
    ],
  },
  apis: ['./src/routes/*.ts'],
};

export default swaggerConfig;
