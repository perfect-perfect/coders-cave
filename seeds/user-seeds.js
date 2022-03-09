const { User } = require("../models/User");

const userData = [
  {
    id: 1,
    username: "jsmith",
    email: "jsmith@gmail.com",
    password: "password",
  },
  {
    id: 2,
    username: "ksmith",
    email: "ksmith@gmail.com",
    password: "password",
  },
  {
    id: 3,
    username: "lsmith",
    email: "lsmith@gmail.com",
    password: "password",
  },
  {
    id: 4,
    username: "msmith",
    email: "msmith@gmail.com",
    password: "password",
  },
  {
    id: 5,
    username: "nsmith",
    email: "nsmith@gmail.com",
    password: "password",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
