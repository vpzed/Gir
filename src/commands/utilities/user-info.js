const commando = require("discord.js-commando");
const stripIndents = require("common-tags").stripIndents;

module.exports = class UserInfoCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: "user-info",
      aliases: ["user"],
      group: "utilities",
      memberName: "user-info",
      description: "Gets information about a user.",
      examples: ["user-info @Crawl#3208", "user-info Crawl"],
      guildOnly: true,
      args: [
        {
          key: "member",
          label: "user",
          prompt: "What user would you like to snoop on?",
          type: "member"
        }
      ]
    });
  }

  async run(msg, args) {
    const member = args.member;
    const user = member.user;
    return msg.reply(stripIndents`
			Info on **${user.username}#${user.discriminator}** (ID: ${user.id})
			**❯ Member Details**
			${member.nickname !== null ? ` • Nickname: ${member.nickname}` : " • No nickname"}
			 • Roles: ${member.roles.map(roles => `\`${roles.name}\``).join(", ")}
			 • Joined at: ${member.joinedAt}
			**❯ User Details**
			 • Created at: ${user.createdAt}${user.bot ? "\n • Is a bot account" : ""}
			 • Status: ${user.presence.status}
			 • Game: ${user.presence.game ? user.presence.game.name : "None"}
		`);
  }
};
