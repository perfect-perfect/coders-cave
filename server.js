const path = require("path");
const express = require("express");
const routes = require("./routes");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// var execPHP = require("./execphp.js");

// execPHP.phpFolder = "C:\\Users\\rrk92\\Projects\\coders-cave\\php";

// app.use("*.php", function (request, response, next) {
//   execPHP.parseFile(request.originalUrl, function (phpResult) {
//     response.write(phpResult);
//     response.end();
//   });
// });

const helpers = require("./utils/helpers");

const hbs = exphbs.create({ helpers });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// routes we will be using will be be run through index.js as the main file. it defaults to this, which is why we don't include index.js it in the variable for routes
app.use(routes);

// turn on db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
