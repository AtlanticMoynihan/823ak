const {Client} = require('discord.js');
const {RichEmbed} = require('discord.js');
const {Attachment} = require('discord.js');
const bot = new Client();

const token = 'NzE5NzA1NTc4NzYyNjY2MDA0.Xt7UDQ.s1itYnT98duo_5xMegNkHPGoDls';

bot.on("ready", async () =>{
    console.log(`Online.`);
    function changing_status() {
        let status = ["kicking all newcomers for security", "anti-raid bot", "TEMPORARY bot"]
        let randomStatus = status[Math.floor(Math.random() * status.length)]
        
        //bot.user.setActivity('Prefix: a!'); //PLAYING //WATC
        bot.user.setActivity(randomStatus,{type: 'PLAYING'});
    }
    setInterval(changing_status, 10000) //DO NOT SET LESS THAN 10000 OR THE BOT WILL BE API BANNED, APPLIES TO ALL OTHER BOT INTERVALS USING MILLISECONDS TO COUNT!//
})

bot.on('guildMemberAdd', member => {

    const channel = member.guild.channels.find(channel => channel.name === "723bot");
    if(!channel) return;

    member.kick(`Kicked as part of a temporary security feature.`)

    const KickSuccessEmbed = new RichEmbed()
    .setTitle(`Member Kick OK!\nMember = ${member}`)
    .setColor(0xFF0000)
    .setDescription('Reason = Anti-Raid')

    channel.send(KickSuccessEmbed);
});



bot.login(token);