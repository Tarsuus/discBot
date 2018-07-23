const Discord = require("discord.js");
const https = require('https');


module.exports.run = async (bot, message, args) => {
  
  https.get('https://www.chucknorrisfacts.fr/api/get?data=nb:1', (resp) => {
    let data = '';
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    resp.on('end', () => {
      console.log(JSON.parse(data).explanation);
    });
 
  }).on("error", (err) => {
      console.log("Error: " + err.message);
     });
  
  console.log("works");
    console.log("message "+message);
    console.log("args "+args);
}

module.exports.help = {
  name: "chuck"
}
