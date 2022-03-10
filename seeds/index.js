const seedUsers = require("./user-seeds");
const seedPosts = require("./post-seeds");
const seedComments = require("./comment-seeds");
const seedVotes = require("./vote-seeds");
const seedChat = require("./chat-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("DATABASE SYNCED");
  await seedUsers();
  console.log("USERS SEEDED");

  await seedPosts();
  console.log("POSTS SEEDED");

  await seedComments();
  console.log("COMMENTS SEEDED");

  await seedVotes();
  console.log("VOTES SEEDED");

  await seedChat();
  console.log("CHAT SEEDED");

  process.exit(0);
};

seedAll();
