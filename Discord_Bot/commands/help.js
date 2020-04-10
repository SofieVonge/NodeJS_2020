const { prefix } = require('../config.json');

module.exports = {
	name: 'help',
	description: 'List all of my commands.',
	aliases: ['commands'],
	execute(message, args) {
		const data = [];
        const { commands } = message.client;

        data.push('Here\'s a list of all my commands:');

        commands.map((command) => {
            data.push(`\n**Name:** ${command.name}`);

        if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
        if (command.description) data.push(`**Description:** ${command.description}`);
        });

        return message.channel.send(data, { split: true });
	},
};