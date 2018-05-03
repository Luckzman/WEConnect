import config from 'dotenv';
import app from './server';

config.config();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

export default app;
