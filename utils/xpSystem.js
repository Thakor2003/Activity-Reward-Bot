const User = require("../models/User");

async function addXP(message) {

  if(message.author.bot) return;

  let user = await User.findOne({
    userId: message.author.id,
    guildId: message.guild.id
  });

  if(!user){
    user = new User({
      userId: message.author.id,
      guildId: message.guild.id
    });
  }

  const xpGain = Math.floor(Math.random() * 15) + 5;

  user.xp += xpGain;
  user.messages += 1;

  const neededXP = user.level * 100;

  if(user.xp >= neededXP){
      user.level++;
      user.xp = 0;

      message.channel.send(
        `🎉 ${message.author} reached Level ${user.level}!`
      );
  }

  await user.save();
}

module.exports = { addXP };
