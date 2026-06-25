const { checkRoleRewards } =
require("./roleRewards");

if (user.xp >= neededXP) {

    user.level++;

    user.xp = 0;

    await checkRoleRewards(
        message.member,
        user.level
    );

    message.channel.send(
        `🎉 ${message.author} reached Level ${user.level}!`
    );

}
