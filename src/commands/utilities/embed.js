const { Command } = require("discord.js-commando");
const { RichEmbed } = require("discord.js");

module.exports = class EmbedCommand extends Command {
  constructor(client) {
    super(client, {
      name: "embed",
      group: "utilities",
      memberName: "embed",
      description: "Embeds the text you provide.",
      examples: ["embed Embeds are cool."],
      args: [
        {
          key: "text",
          prompt: "What text would you like the bot to embed?",
          type: "string"
        }
      ]
    });
  }

  async run(msg, args) {
    const { text } = args;
    const embed = new RichEmbed()
      .setDescription(text)
      .setAuthor(msg.author.username, msg.author.displayAvatarURL)
      .setColor(0x00AE86)
      .setTimestamp();
    return msg.embed(embed);
  }
};
