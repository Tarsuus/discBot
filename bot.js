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
    	 if(message.channel.name ==="📰-socks-break" || message.channel.name ==="testbot"){
             message.channel.send(":musical_note: :musical_note: \n @everyone Socks Breaking News interrompt une nouvelle fois votre émission ! Toutes les imprimeries de l'empire de la chaussette tournes au maximum, une nouvelle bannière à l'éfigie de notre grand gourou vient tout juste d'être mise au grand jour ! \n Le ministère de la propagande incite tous les concitoyens à je cite \"contempler cette oeuvre d'art\" car cette banière fait désormais partie du patrimoine culturel de notre glorieux empire ! \n Nous avons en direct les premiers mots de l'ariste @Horphelia qui a réalisé cette incroyable chef d'oeuvre ! \n Horphelia: \"En faite ca répresente le grand gourou en train de se faire rouler dessus et ensuite de tomber dans le ...\" \n Ah il semblerait que des problèmes techniques nous empeche de continuer ce direct ... mais pour résumer l'artiste en question a été subjégué par le pouvoir du grand gourou et a donc voulu l'immortaliser ! \n C'était Socks Breaking News, pour les chaussettes et par les chaussettes ! \n :musical_note: :musical_note:")
         }
    }
    
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray[1];
    
    let commandfile = bot.commands.get(cmd.slice(1));
    if(commandfile) commandfile.run(bot,message,args);
});

// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
