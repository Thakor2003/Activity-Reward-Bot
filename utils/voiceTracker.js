const { addVoiceXP } = require("./voiceXP");

function startVoiceTracker(client) {

    setInterval(async () => {

        client.guilds.cache.forEach(async guild => {

            guild.channels.cache.forEach(async channel => {

                if (!channel.isVoiceBased()) return;

                channel.members.forEach(async member => {

                    if (member.user.bot) return;

                    if (member.voice.selfMute) return;

                    if (member.voice.selfDeaf) return;

                    await addVoiceXP(member);

                });

            });

        });

    }, 60000);

}

module.exports = {
    startVoiceTracker
};
