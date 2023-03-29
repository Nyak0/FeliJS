import { Client, Message } from "oceanic.js";
const client = new Client({ 
    auth: "Bot " + process.env['BOT_TOKEN'],
    gateway: {
        intents: ["GUILDS", "GUILD_MESSAGES", "MESSAGE_CONTENT"]
    }
});

client.on("ready", async() => {
    console.log("Ready as", client.user.tag);
});

client.on("messageCreate", async (msg:Message) => {
    if(msg.content === "ping") {
        msg.channel?.createMessage({content:"pong"})
    }
});

client.on("error", (err:string|Error) => {
    console.error("Oops... ", err);
});

client.connect();