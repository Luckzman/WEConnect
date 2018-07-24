import config from 'dotenv';

config.config();

module.exports = {
  development: {
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    dialect: process.env.DIALECT,
  },
  test: {
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.TEST_DATABASE,
    host: process.env.HOST,
    dialect: process.env.DIALECT,
  },
  production: {
    use_env_variable: 'DATABASE_URL',
  },
};
