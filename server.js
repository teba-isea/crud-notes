const express = require("express");
const handlebars = require("express-handlebars");
const session = require("express-session");
const flash = require("connect-flash");
const methodOverride = require("method-override");
const path = require("path");
// Asignations
const server = express();
require("./database");
// Settings
server.set("port", process.env.PORT || 3000);
server.engine(
  ".hbs",
  handlebars({
    defaultLayout: "main",
    partialsDir: path.join(server.get('views'),'partials'),
    extname: ".hbs",
  }),
);
server.set("view engine", ".hbs");
// Middleware

server.use(express.urlencoded({ extended: false }));
server.use(methodOverride("_method"));
server.use(
  session({
    secret: "secretapp",
    resave: true,
    saveUninitialized: true,
  }),
);
server.use(flash());
// Globals
server.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  next()
});
// Routes
server.use(require("./routes/index"));
server.use(require("./routes/notes"));
server.use(require("./routes/users"));

// Static
server.use(express.static(path.join(__dirname, "public")));
// Serve
server.listen(server.get("port"), () => {
  console.log(`Server running on port ${server.get("port")}`);
});
