const Discord = require("discord.js");
const https = require('https');


module.exports.run = async (bot, message, args) => {
  
  console.log("Chuck commande");
  
  https.get('https://www.chucknorrisfacts.fr/api/get?data=nb:1', (resp) => {
    let data = '';
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
      console.log("test ["+data+"]");
    });

    resp.on('end', () => {
        console.log("test1");
      console.log(JSON.parse(data).explanation);
    });
 
  }).on("error", (err) => {
      console.log("test2");
      console.log("Error: " + err.message);
     });
  
}

module.exports.help = {
  name: "chuck"
}
