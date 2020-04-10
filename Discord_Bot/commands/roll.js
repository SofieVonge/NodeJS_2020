module.exports = {
    name: "roll",
    description: "Tell Anna to roll a die",
    execute(message, args) {
        let eye;

        if (!args.length) {
            eye = Math.floor(Math.random() * 100) + 1;
            return message.channel.send(`You rolled a d100 and it landed on ${eye}.`);
        } else {
            let die;

            if (args[0].startsWith("d")) {
                die = Number(args[0].slice(1));
            } else {
                die = Number(args[0]);
            }

            eye = Math.floor(Math.random() * die) + 1;

            const allowedDice = [4, 6, 8, 10, 12, 20, 100];

            if (allowedDice.includes(die)) {
                 return message.channel.send(`You rolled ${eye}.`);
            } else {
                 return message.channel.send(`LOL, there is no such thing as a d${die}? Try a d4, d6, d8, d10, d12, d20 or d100.`);

            }
            
        }
    },


};