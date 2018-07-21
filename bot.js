const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

client.on('UserConnection', userConnection => {
   console.log("User connected, userId:["+userConnection.id+"], name:["+userConnection.name+"],
               revoked:["+userConnection.revoked+"],type:["+userConnection.type+"],user:["+userConnection.user+"]");
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
