const commando = require("discord.js-commando");

module.exports = class BangCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: "bang",
      group: "responders",
      memberName: "bang",
      description: "Returns text",
      guildOnly: true,
    });
  }

  async run(msg) {
    return msg.say("Bang, bang, shoot, shoot, bullet, bullet, gun.");
  }
};
