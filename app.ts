import express from 'express';
import swaggerUi from 'swagger-ui-express';
import cookieParser from 'cookie-parser';
import swaggerJsdoc from 'swagger-jsdoc';
import { authenticate } from './src/api/v1/middleware/auth.middleware';
import driverRoutes from './src/api/v1/routes/driver/driver.routes';
import seasonRoutes from './src/api/v1/routes/seasons/seasons.routes';
import constructorRoutes from './src/api/v1/routes/constructor/constructor.routes';
import circuitRoutes from './src/api/v1/routes/circuits/circuits.routes';
import authRoutes from './src/api/v1/routes/auth/auth.routes';
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cookieParser());

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API with Swagger',
      version: '1.0.0',
    },
  },
  apis: ['./src/api/v1/routes/**/*.swagger.ts'],
};

let specs;
try {
  specs = swaggerJsdoc(options);
} catch (error) {
  console.error('Failed to generate Swagger docs:', error);
}

app.use('/auth', authRoutes);
app.use('/drivers', authenticate, driverRoutes);
app.use('/constructors', authenticate, constructorRoutes);
app.use('/seasons', authenticate, seasonRoutes);
app.use('/circuits', authenticate, circuitRoutes);
if (specs) {
  app.use(['/','/api-docs'], swaggerUi.serve, swaggerUi.setup(specs));
} else {
  console.error('Swagger specs not available');
}
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
