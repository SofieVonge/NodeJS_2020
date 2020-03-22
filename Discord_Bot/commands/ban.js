module.exports = {
    name: "ban",
    description: "Ban!",
    guildOnly: true,
    execute(message, args) {
        if (!message.mentions.users.size) {
            return message.channel.send(`Who should I ban, ${message.author.username}? Try tagging someone next time, n00b!`);
        } 
 
        if (message.mentions.users.size > 1) {
            return message.channel.reply("I can't ban that many at once you know ...");
        }
        // getting the first user that is tagged
        const user = message.mentions.users.first();
        return message.channel.send(`What did ${user.username} ever do to you, ${message.author.username}?`);
    },
};