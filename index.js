const Discord = require('discord.js');
const client = new Discord.Client(); 
const setting = require('./auth.json');

client.on('ready', () => {
    console.log('>> 機器人已啟動 <<');
});

client.login(setting.TOKEN)