const { Command } = require("discord.js-commando");

module.exports = class SetGameCommand extends Command {
  constructor(client) {
    super(client, {
      name: "set-game",
      group: "utilities",
      memberName: "set-game",
      description: "Sets bot's game",
      examples: ["set-status dnd"],
      guildOnly: true,
      args: [
        {
          key: "text",
          prompt: "What game do you want to set?",
          type: "string"
        }
      ]
    });
  }

  hasPermission(msg) {
    return this.client.isOwner(msg.author);
  }

  async run(msg, args) {
    const { text } = args;
    this.client.user.setGame(`${text}`);
    return msg.say(`The Bot game is now: ${text}`);
  }
};
