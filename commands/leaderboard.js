const {
    SlashCommandBuilder,
    EmbedBuilder
} = require("discord.js");

const User = require("../models/User");

module.exports = {

    data: new SlashCommandBuilder()
        .setName("leaderboard")
        .setDescription("Server leaderboard"),

    async execute(interaction) {

        const users = await User.find({
            guildId: interaction.guild.id
        })
        .sort({ level: -1, xp: -1 })
        .limit(10);

        let text = "";

        users.forEach((user, index) => {

            text +=
            `${index + 1}. <@${user.userId}> | Level ${user.level}\n`;

        });

        const embed = new EmbedBuilder()
            .setTitle("🏆 Top 10 Leaderboard")
            .setDescription(text);

        interaction.reply({
            embeds: [embed]
        });

    }
};
