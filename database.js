const database = require("mongoose");

database
  .connect("mongodb://localhost/crud-db", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("database already"))
  .catch((err) => console.error(err));
