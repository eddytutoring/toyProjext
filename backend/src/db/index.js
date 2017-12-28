//process env
require('dotenv').config();

const {
  DB_PORT: port,
  DB_HOST: url,
  DB_USER: user,
  DB_PWD: password,
  DB_SCHEMA: schema,
} = process.env;

module.exports = {
  host: url,
  port: port,
  user: user,
  password: password,
  database: schema
};