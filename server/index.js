import express from 'express';
import swaggerUi from 'swagger-ui-express';
import router from './routes';
import swaggerDocument from './../swagger.json';

const app = express.Router();
app.get('/', (req, res) => {
  res.redirect('/api/v1');
});
app.use('/api/v1', router);
app.get('/api/v1', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('*', (req, res) => {
  res.status(404).json('wrong url');
});

export default app;
