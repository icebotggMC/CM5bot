const http = require("http");
const prefix = "-";
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});

const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", message => {
  if (message.content === `ping`) {
    let start = Date.now();
    message.channel.send("pong").then(message => {
      message.edit(`\`\`\`js
Time taken: ${Date.now() - start} ms
Discord API: ${client.ws.ping.toFixed(0)} ms\`\`\``);
    });
  }
});
//////////////////////////////////////////////////////////////

client.on('message', msg => {
  if (msg.content === 'كيف الحال') {
    msg.reply('بخير عساك بخير');
  }
});

//////////////////////////////////////////////////////

client.on('message', message => {
        var prefix = "+";
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;
      
        let command = message.content.split(" ")[0];
        command = command.slice(prefix.length);
      
      
      let args = message.content.split(" ").slice(1);
      let x = args.join(" ")
        if(message.content.startsWith(prefix + 'say')) {
            message.channel.send(''+x);
                message.delete(1000)
        }
        
       
      });



	

////////////////////////////////////////////////////

client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('كس امك','كل زق' ,'تفو عليك' ,'يا معفن' ,'يابن الكلب ')){
        message.delete()
    return message.reply(`** عيب عليك لا تسب ! **`)
    }
});

/////////////////////////////////////////////////امر دخول الروم

client.on('message', async message => {
    if (!message.guild) return;
  if (message.content === '/join') {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      } else {
      message.reply('You need to join a voice channel first!');
    }
  }
});


/////////////////////////////////////////////////////


const developers = ["457732668155494402","433257236165427210",""]
const adminprefix = "bc!";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});
///////////////////////////////////////////////////





client.login(process.env.token);
