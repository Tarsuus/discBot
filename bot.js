const Discord = require('discord.js');
const client = new Discord.Client();
const fs = required("fs");

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0) {
     console.log("Commandes introuvable");
     return;
    }
})


client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('C\'est ...la mer noire');
  	}
});

client.on('presenceUpdate', (oldMember,newMember) => {
    console.log(' oldMumber speaking'+oldMember.speaking+' nick '+oldMember.displayName);
    console.log(' newMember speaking'+newMember.speaking+' nick '+newMember.displayName);
});

client.on('guildMemberAdd', member => {
    console.log('new member joinedAt '+ member.joinedAt);
    console.log('new member joinedTimestamp '+ member.joinedTimestamp);
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
