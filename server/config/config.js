const config = require('dotenv');

config.config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    secret_key: process.env.SECRET_KEY,
    dialect: process.env.DB_DIALECT,
  },
  test: {
    username: 'postgres',
    password: 'postgres',
    database: 'weconnect_test',
    host: '127.0.0.1',
    secret_key: 'my_secret',
    dialect: 'postgres',
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
  },
};
