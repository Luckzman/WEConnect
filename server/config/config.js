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
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_TEST_NAME,
    host: process.env.DB_HOST,
    secret_key: process.env.SECRET_KEY,
    dialect: process.env.DB_DIALECT,
  },
  production: {
    use_env_variable: process.env.DATABASE_URL,
    dialect: process.env.DB_DIALECT,
  },
};
