import Bot from "../Utils/structs/Bot.js";

const client = new Bot({ 
    auth: "Bot " + process.env['BOT_TOKEN'],
    gateway: {
        intents: ["GUILDS", "GUILD_MESSAGES", "MESSAGE_CONTENT"]
    },
    prefixes:["feli", "testing"]
});

client.start()

client.on("ready", async() => {
    console.log("I am ", client.user.tag);
});