const express = require("express");
const routes = require("./routes");
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes we will be using will be be run through index.js as the main file. it defaults to this, which is why we don't include index.js it in the variable for routes
app.use(routes);

// turn on db and server
sequelize.sync({ forse: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
