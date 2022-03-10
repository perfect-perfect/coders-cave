const Chat = require("../models/Chat-Comments");

const chatData = [
  {
    id: 1,
    content: "This is a chat comment",
    user_id: 1,
  },
  {
    id: 2,
    content: "This is a chat comment",
    user_id: 2,
  },
  {
    id: 3,
    content: "This is a chat comment",
    user_id: 3,
  },
  {
    id: 4,
    content: "This is a chat comment",
    user_id: 4,
  },
  {
    id: 5,
    content: "This is a chat comment",
    user_id: 5,
  },
];

const seedChat = () => Chat.bulkCreate(chatData);

module.exports = seedChat;
