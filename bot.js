const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('C\'est ...la mer noire');
  	}
});

client.on('presenceUpdate', (oldMember,newMember) => {
    console.log(' oldMumber joinedAt '+ oldMember.joinedAt);   
    console.log(' newMember joinedAt '+ newMember.joinedAt);   
    console.log(' oldMumber joinedTimestamp '+ oldMember.joinedTimestamp);   
    console.log(' newMember joinedTimestamp'+ newMember.joinedTimestamp);   
});

client.on('guildMemberAdd', member => {
    console.log('new member joinedAt '+ member.joinedAt);
    console.log('new member joinedTimestamp '+ member.joinedTimestamp);
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
