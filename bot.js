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
        console.log(props.help.name +" chargé !");
        bot.commands.set(props.help.name, props);
    });
});


bot.on("ready", () => {
    console.log(" Paré à l\'action !");
});

bot.on("message", message => {
    if (message.content === "!news") {
    	 if(message.channel.name ==="📰-socks-breaking-news2" ){
             message.channel.send(":musical_note: :musical_note:\n @everyone Socks breaking news interrompt votre émission pour vous rappeler que notre grand gourou est parti dans des contrés encore inexploré pour répandre la bonne parole une fois de plus ! \n Il ne pourra donc pas assurer ses séances farineuses du samedi soir et dimanche matin. Il reviendra de son périple possiblement pour la séance du dimanche soir ! \n Nous lui souhaitons tous bonne chance dans son aventure, c'était socks breaking news, pour les chaussettes et par les chaussettes !\n :musical_note: :musical_note:",{disableEveryone: false})
         }
    }
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray[1];
    
    let commandfile = bot.commands.get(cmd.slice(1));
    if(commandfile) commandfile.run(bot,message,args);
});

bot.on('presenceUpdate', (oldMember, newMember) => {
  console.log('old:'+ oldMember.user.displayName);
  console.log(oldMember.user.joinedAt);
  console.log('new:'+ newMember.user.displayName);
  console.log(newMember.user.joinedAt);
});

bot.on('guildMemberAdd', member => {
    console.log('new member joinedAt '+ member.joinedAt);
    console.log('new member joinedTimestamp '+ member.joinedTimestamp);
});

// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
