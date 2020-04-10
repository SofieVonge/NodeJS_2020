module.exports = {
    name: "yell",
    description: "Tell Anna to yell at a user",
    guildOnly: true,
    execute(message, args) {
        if (!message.mentions.users.size) {
            return message.channel.send(`Who should I yell at, ${message.author.username}? TRY TAGGING SOMEONE NEXT TIME, n00b!`);
        } 

        if (message.mentions.users.size > 1) {
            return message.channel.reply("Go yell at them yourself ...");
        }

        const user = message.mentions.users.first();
        return message.channel.send(`BAD ${user.username}, VERY BAD. ${message.author.username} is disappointed with you.`);
    },

};