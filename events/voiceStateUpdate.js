const activeUsers = new Map();

module.exports = {

    name: "voiceStateUpdate",

    async execute(oldState, newState) {

        const member = newState.member;

        if (!member || member.user.bot) return;

        if (!oldState.channelId && newState.channelId) {

            activeUsers.set(member.id, Date.now());

        }

        if (oldState.channelId && !newState.channelId) {

            activeUsers.delete(member.id);

        }

    }

};
