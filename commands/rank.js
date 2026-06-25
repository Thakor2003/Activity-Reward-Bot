const {
    SlashCommandBuilder,
    EmbedBuilder
} = require("discord.js");

const User = require("../models/User");

module.exports = {

    data: new SlashCommandBuilder()
        .setName("rank")
        .setDescription("Show your rank"),

    async execute(interaction) {

        let user = await User.findOne({
            userId: interaction.user.id,
            guildId: interaction.guild.id
        });

        if (!user) {

            return interaction.reply({
                content: "No data found.",
                ephemeral: true
            });

        }

        const embed = new EmbedBuilder()
            .setTitle("🏆 Rank Card")
            .addFields(
                {
                    name: "Level",
                    value: `${user.level}`,
                    inline: true
                },
                {
                    name: "XP",
                    value: `${user.xp}`,
                    inline: true
                },
                {
                    name: "Messages",
                    value: `${user.messages}`,
                    inline: true
                }
            );

        interaction.reply({
            embeds: [embed]
        });

    }
};
