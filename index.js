const Discord = require("discord.js");

const TOKEN = "NTMwNzU4MzM0ODE1NTM1MTA1.DztOrA.mGJx_UnrL9TMrowfXi2L9dljKG4"
const PREFIX = ">"

function generateHex() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

var fortunes = [
    "Yes",
    "No",
    "Maybe",
    "lol"
];

var bot = new Discord.Client();

var servers = {};

bot.on("ready", function() {
    console.log("Bot is Ready");
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return

    var args = message.content.substring(PREFIX.length).split("  ");

    switch (args[0].toLowerCase()) {
        case "ping":
            message.channel.sendMessage("Pong!");
            break;
        case "8ball":
            if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
            else message.channel.sendMessage("Can't read");
            break;
        case "about":
            var embed = new Discord.RichEmbed()
                .addField("About LowChat", "This is Bot LowChat for use in server LowChat if you want to join server please use command! >", true)
                .setColor(0x00FFFF)
            message.channel.sendEmbed(embed);
            break;
        case "link":
            var embed = new Discord.RichEmbed()
                .addField("Summon bot to server", "[Add me](https://discordapp.com/api/oauth2/authorize?client_id=477467368575205377&permissions=8&scope=bot)", true)
                .addField("Server", "[LowChat official server](https://discord.gg/QJVSdPB)", true)
                .addField("Donate", "[Donate item you think not use](https://steamcommunity.com/tradeoffer/new/?partner=120953120&token=fYdeDdpB)", true)
                .addField("Wetsite", "[Visit website](https://birdxyz.wixsite.com/lowchat)", true)
                .setColor(0x00FFFF)
            message.channel.sendEmbed(embed);
            break;
        case "removerole":
            message.member.removeRole(message.member.guild.roles.find("name", "Outside"));
            break;
        case "steamnextsale":
            message.channel.sendMessage(message.author.toString() + " **Sorry I can't tell you! But you can visit the site.** ");
            var embed = new Discord.RichEmbed()
                .addField("Website", "[CLICK TO WEBSITE](https://www.whenisthenextsteamsale.com/)", true)
                .setColor(0x00FFFF)
            message.channel.sendEmbed(embed);
            break;
        case "gamesale":
            message.channel.sendMessage(message.author.toString() + " **Hey, You can check! game sale on steam** ");
            var embed = new Discord.RichEmbed()
                .addField("WEBSITE", "[CHECK](https://steamdb.info/sales/)", true)
                .setColor(0x00FFFF)
            message.channel.sendEmbed(embed);
            break;
        default:
            message.channel.sendMessage("Hey, What do you want!!");
            break;
        case "module":
            message.channel.sendMessage(message.author.toString() + " :notepad_spiral:Note: Hello, This is command of Twittey8G Bot Prefix `!!` and BoomBird Prefix: `>` and BarrelBot Prefix: `}` and HKiller Prefix: `+`");
            var embed = new Discord.RichEmbed()
                .addField("Module QJ68 :tools:", "-link", true)
                .addField("Module BarrelBot :tools:", "-help general -help fun -help moderation -help music", true)
                .addField("Module HKiller :tools:", "-mod", true)
                .setColor(0xFF0000)
                .setFooter("Message From Developer !")
            message.channel.sendEmbed(embed);
            break;
        case "help_gamebeta":
            message.channel.sendMessage(message.author.toString() + ":notepad_spiral:please follow step now!");
            var embed = new Discord.RichEmbed()
                .addField("Step 1", "click Libary", true)
                .addField("Step 2", "right click game you want", true)
                .addField("Step 3 ", "click properties", true)
                .addField("Step 4", "click Beta", true)
            message.channel.sendEmbed(embed);
            break;
        case "inforbot":
            message.channel.sendMessage(message.author.toString() + ":notepad_spiral: this is test command handler");
            var embed = new Discord.RichEmbed()
                .addField("Information Bot", "coming soon", true)
                .setColor(0xFF0000)
            message.channel.sendEmbed(embed);
            break;
    }
});

bot.login(TOKEN);
