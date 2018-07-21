
const { Client } = require('pg');
const config = require('dotenv');

module.exports = {
  development: {
    username: 'postgres',
    password: 'postgres',
    database: 'db_weconnect',
    host: '127.0.0.1',
    secret_key: ' ',
    dialect: 'postgres',
  },
  test: {
    username: 'postgres',
    password: 'postgres',
    database: 'weconnect_test',
    host: '127.0.0.1',
    // secret_key: 'my_secret',
    dialect: 'postgres',
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    // use_env_variable: 'postgresql-spherical-44929',
    // database: 'd4ihv1367ofee',
    // user: 'uukcvkbvmzdiku',
    // password: 'b8f158693272e778bb4b6a6955f5389f8a504bb24b26ea49771f427b9949f897',
    // host: 'ec2-54-83-1-94.compute-1.amazonaws.com',
    // dialect: process.env.DB_DIALECT,
    // secret_key: process.env.SECRET_KEY,
    // ssl: true,
  },
};
