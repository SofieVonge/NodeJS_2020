
const fs = require("fs");

// connecting to the Discord module and set up a client
const Discord = require("discord.js");
const client = new Discord.Client;

client.commands = new Discord.Collection;
const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

// using config file for easy access
const { prefix, token } = require('./config.json');

// writes to the console that the bot is on
client.once("ready", () => {
    console.log("Bot is ready");
});

const badWords = ["fuck", "shit", "fucking", "twat", "muppet"];


// bot response to messages that the users send
client.on("message", message => {

        //what happens if the user doesn't interact with the bot directly via !
    if (!message.content.startsWith(prefix)) {
        const words = message.content.toLocaleLowerCase().split(/ +/);
        
        words.map(word => {
            if (badWords.includes(word)) {
                return message.channel.send(`Did you just say ${word}?!?!?! Baaaaaaad, ${message.author.username}! That is NSFW!`);
            }
        });

        return; 
    } 

    // making an array of the arguments minus the prefix, split by a space (regex)
    const args = message.content.slice(prefix.length).toLowerCase().split(/ +/);



    // the command is the first word after the prefix
    const commandName = args.shift();



    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

   // if (command.guildOnly && message.channel.type !== 'text') {
     //   return message.reply('I can\'t execute that command here, dummie!?');
    //}

    if (!command) {
        return message.channel.send(`Try again, ${message.author}. I don't understand your command. Use the !help command to see all my commands.`);
    }
    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        return message.channel.send("Alert alert, error alert. RUN FOR YOUR LIVES!");
    }
    


});



client.login(token);
