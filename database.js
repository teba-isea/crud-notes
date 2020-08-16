const database = require("mongoose");

const DB_USERNAME = "admin";
const DB_PASSWORD = "your_password";
const DB_HOSTNAME = "127.0.0.1";
const DB_PORT = "27017";
const DB_NAME = "crud-db";
const url  = `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOSTNAME}:${DB_PORT}/${MONGO_DB}?authSource=admin`;
const localUrl ="mongodb://localhost/crud-db";

database
  .connect(localUrl, { useNewUrlParser: true })
  .then((db) => console.log(`Database already: ${localUrl}`))
  .catch((err) => console.error(`Can't connect to the database: ${err}`));


