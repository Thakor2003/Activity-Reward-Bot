const { addXP } = require("../utils/xpSystem");

module.exports = {
    name: "messageCreate",

    async execute(message) {

        if (message.author.bot) return;
        if (!message.guild) return;

        await addXP(message);

    }
};
