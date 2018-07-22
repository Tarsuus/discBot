const Discord = require('discord.js');
const fs = require("fs");

const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0) {
     console.log("Commandes introuvable");
     return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} chargé !`);
        bot.commands.set(props.help.name, props);
    });
});


bot.on('ready', () => {
    console.log('I am ready!');
});

bot.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('C\'est ...la mer noire');
  	}
});

bot.on('presenceUpdate', (oldMember,newMember) => {
    console.log(' oldMumber speaking'+oldMember.speaking+' nick '+oldMember.displayName);
    console.log(' newMember speaking'+newMember.speaking+' nick '+newMember.displayName);
});

bot.on('guildMemberAdd', member => {
    console.log('new member joinedAt '+ member.joinedAt);
    console.log('new member joinedTimestamp '+ member.joinedTimestamp);
});

// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
