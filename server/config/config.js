export default {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    secret_key: process.env.SECRET_KEY,
    dialect: DB_DIALECT,
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_TEST_NAME,
    host: DB_HOST,
    secret_key: process.env.SECRET_KEY,
    dialect: DB_DIALECT,
  },
  production: {
    environment: 'production',
  },
};
