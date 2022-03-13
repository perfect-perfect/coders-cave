const sequelize = require("../config/connection");
const { User } = require("../models");

const userdata = [
  {
    username: "perfect-perfect1",
    email: "perfect-perfect1@nbc.com",
    password: "password123",
  },
  {
    username: "perfect-perfect2",
    email: "perfect-perfect2@yahoo.com",
    password: "password",
  },
  {
    username: "perfect-perfect3",
    email: "perfect-perfect3@perfect.com",
    password: "password",
  },
  {
    username: "perfect-perfect4",
    email: "perfect-perfect4@gmail.com",
    password: "password",
  },
  {
    username: "perfect-perfect5",
    email: "perfect-perfect5@hotmail.com.com",
    password: "password",
  },
  {
    username: "perfect-perfect6",
    email: "perfect-perfect6@hotmail.com",
    password: "password",
  },
  {
    username: "perfect-perfect7",
    email: "perfect-perfect7@perfect.com",
    password: "password",
  },
  {
    username: "perfect-perfect8",
    email: "perfect-perfect8@gmail.com",
    password: "password",
  },
  {
    username: "perfect-perfect9",
    email: "perfect-perfect9@googlemail.com",
    password: "password",
  },
  {
    username: "perfect-perfect10",
    email: "perfect-perfect10@google.com",
    password: "password",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
