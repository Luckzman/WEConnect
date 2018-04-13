import express from 'express';
import businessRouter from './business';
import userRouter from './user';

const app = express.Router();
app.use('/business', businessRouter);
app.use('/auth', userRouter);

export default app;
