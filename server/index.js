import express from 'express';
import router from './routes';

const app = express.Router();
app.use('/api/v1', router);
app.use('*', (req, res) => {
  res.status(404).json({
    message: 'Request Not Successful',
  });
});

export default app;
