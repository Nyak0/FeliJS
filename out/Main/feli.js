import Bot from "../Utils/structs/Bot.js";
export const feli = new Bot({
    auth: "Bot " + process.env['BOT_TOKEN'],
    gateway: {
        intents: ["GUILDS", "GUILD_MESSAGES", "MESSAGE_CONTENT"]
    },
    prefixes: ["feli", "testing"]
});
feli.start();
