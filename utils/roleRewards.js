const config = require("../config/config.json");

async function checkRoleRewards(member, level) {

    const roleId = config.levelRoles[level];

    if (!roleId) return;

    const role = member.guild.roles.cache.get(roleId);

    if (!role) return;

    if (!member.roles.cache.has(role.id)) {

        await member.roles.add(role);

    }

}

module.exports = {
    checkRoleRewards
};
