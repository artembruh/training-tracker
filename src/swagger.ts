import swaggerJsDoc from 'swagger-jsdoc';

const options: swaggerJsDoc.OAS3Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: '{{ Replace }}',
      version: '1.0.0',
      description: '{{ Replace }}'
    },
    servers: [
      {
        url: 'http://localhost:3000/api/v1',
        description: 'Development Server'
      }
    ],
    components: {
      securitySchemes: {},
      schemas: {}
    }
  },
  apis: ['./src/route/*.ts']
};

export default swaggerJsDoc(options);
