const {
    SlashCommandBuilder,
    EmbedBuilder
} = require("discord.js");

const User = require("../models/User");

module.exports = {

    data: new SlashCommandBuilder()
        .setName("profile")
        .setDescription("Show your profile"),

    async execute(interaction) {

        let user = await User.findOne({
            userId: interaction.user.id,
            guildId: interaction.guild.id
        });

        if (!user) {

            return interaction.reply({
                content: "No profile found.",
                ephemeral: true
            });

        }

        const embed = new EmbedBuilder()
            .setTitle(`👤 ${interaction.user.username}`)
            .setThumbnail(
                interaction.user.displayAvatarURL()
            )
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
                    name: "Coins",
                    value: `${user.coins}`,
                    inline: true
                },
                {
                    name: "Messages",
                    value: `${user.messages}`,
                    inline: true
                },
                {
                    name: "Voice Time",
                    value: `${user.voiceTime} min`,
                    inline: true
                }
            );

        interaction.reply({
            embeds: [embed]
        });

    }
};
