import express from 'express';
import config from 'dotenv';
import bodyParser from 'body-parser';
import logger from 'morgan';
import router from './server';

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', router);
config.config();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

export default app;
