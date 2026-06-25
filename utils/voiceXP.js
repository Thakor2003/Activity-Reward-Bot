const User = require("../models/User");

async function addVoiceXP(member) {

    let user = await User.findOne({
        userId: member.id,
        guildId: member.guild.id
    });

    if (!user) {

        user = new User({
            userId: member.id,
            guildId: member.guild.id
        });

    }

    user.voiceTime += 1;
    user.xp += 5;

    const neededXP = user.level * 100;

    if (user.xp >= neededXP) {

        user.level++;
        user.xp = 0;

    }

    await user.save();
}

module.exports = {
    addVoiceXP
};
