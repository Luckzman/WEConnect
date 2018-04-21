import express from 'express';
import router from './routes';

const app = express.Router();
app.use('/api/v1', router);

export default app;
