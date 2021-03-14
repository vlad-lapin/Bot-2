const Discord = require('discord.js');
const { link } = require('node:fs');
const { config } = require('node:process');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const fs = requlre('fs');

fs.readdir('./cmds/',(err,files)=>{
    if(err) console.log(err);
    let jsfiles = files.filter(f => f.split(".").pop () === "js");
    if(jsfiles.length <=0) console.log("Нет комманд для загрузки!!");
    console.log(`Загружено ${jsfiles.length} комманд`);
    jsfiles.forEach((f,i) =>{
        let.props = require(`./cmds/${f}`);
        console.log(`${i+1}.`)
    })
    });


bot.on('ready', () => {
  console.log(`Запустился бот ${bot.user.username}`);
  bot.generateInvite(["ADMINISTRATOR"]).then(link=>{
      console.log(link);
   })
});

bot.on('message', msg => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
    let user = message.author.username;
    let userid = message.author.id;
    let messageArray = message.content.split(" ");
    let command = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);
    if(message.content.startWith(prefix)) return;
    let cmd = bot.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(bot,message,args);
 });

bot.login('ODE1NTczMDk0MTY0NDYzNjE2.YDuXog.O5K6ZEiD37CAZFzAaIPSEiCygAU');
