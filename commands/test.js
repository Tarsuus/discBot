const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  console.log("works");
    console.log("message "+message);
    console.log("args "+args);
}

module.exports.help = {
  name: "test"
}
