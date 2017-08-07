const commando = require("discord.js-commando");

module.exports = class MeCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: "me",
      group: "responders",
      memberName: "me",
      description: "Returns text as user",
      examples: ["me Needs a coffee!"],
      guildOnly: true,
      args: [
        {
          key: "text",
          prompt: "What text would you like the bot to say as you?",
          type: "string"
        }
      ]
    });
  }

  async run(msg, args) {
    const { text } = args;
    return msg.reply(` ${text}`);
  }
};
