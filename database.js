const database = require("mongoose");

const DB_USERNAME = "admin";
const DB_PASSWORD = "your_password";
const DB_HOSTNAME = "127.0.0.1";
const DB_PORT = "27017";
const DB_NAME = "crud-db";
const url  = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOSTNAME}:${DB_PORT}/${DB_NAME}?authSource=admin`;
const localUrl ="mongodb://localhost/crud-db";
// my test dbs
const testDb = "mongodb+srv://teba-isea:bLeaJmG1dFeHp2Vj@cluster0.jm87x.mongodb.net/crud-db?retryWrites=true&w=majority"

database
  .connect(testDb, { useNewUrlParser: true ,useUnifiedTopology: true})
  .then((db) => console.log(`Database already: ${localUrl}`))
  .catch((err) => console.error(`Can't connect to the database: ${err}`));


