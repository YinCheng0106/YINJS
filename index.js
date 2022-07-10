const { Client, Intents } = require('discord.js');
const {TOKEN} = require('./auth.json');

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES
    ]
});

client.on('ready', () => {
    console.log('>> 機器人已啟動 <<')
});

client.login(TOKEN)