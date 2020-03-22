module.exports = {
    name: "eightball",
    aliases: ["8-ball", "eight-ball", "ball"],
    description: "Fortunetelling",
    execute(message, args) {

        if (!args.length) {
            return message.reply("yes? What do you wanna ask me?");
        } else {

        const number = Math.floor(Math.random() * 8) + 1;


        switch (number) {
            case 1:
                return message.reply("that is not relevant. But you will meet a tall, dark stranger.");
                break;

            case 2:
                return message.reply(`no time to explain! Just run away from ${message.guild.name}.`);
                break;
            
            case 3:
                return message.reply(`I don't know, but I sense that ${message.channel.name} is a very bad place filled with trolls.`);
                break;

            case 4:
                return message.reply(`42`);
                break;
            
            case 5:
                let reply = "";
                for (let arg of args) {
                    reply += arg + " ";
                }

                return message.reply(`"${reply}"? LOL! Good one.`);
                break;
            
            case 6:
                return message.reply(`who told you to ask me that? Now I know that one out of the ${message.guild.memberCount} guildmembers will betray you.`);
                break;

            case 7:
                return message.reply(`ask anything but that!`);
                break;
            
            case 8:
                return message.reply("maybeeeee?");

        }
    }
        
        
    },
};