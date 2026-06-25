const fs = require("fs");
client.commands = new Map();

const commandFiles =
fs.readdirSync("./commands")
.filter(file => file.endsWith(".js"));

for (const file of commandFiles) {

    const command =
    require(`./commands/${file}`);

    client.commands.set(
        command.data.name,
        command
    );
}

const eventFiles =
fs.readdirSync("./events")
.filter(file => file.endsWith(".js"));

for (const file of eventFiles) {

    const event =
    require(`./events/${file}`);

    client.on(
        event.name,
        (...args) => event.execute(...args)
    );
}
