const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
let awakeEmbed = new Discord.MessageEmbed()
    .setColor("#57F287")
    .setTitle("Awake")
    .setDescription("I have woken up")

client.once('ready', () => {
    console.log('Bot is Ready');
    client.channels.cache.get("827179141039915058").send(awakeEmbed);
});

client.on("messageReactionAdd", async (reaction, user, message) => { //Add an event listener
    if (reaction.message.partial) await reaction.message.fetch();
  
    if (user.id === client.user.id) return; //If the reaction was from the bot, return
    if (!reaction.message.guild) return; //If the reaction was not in a guild
  
    if (reaction.emoji.name === "🎫" && client.channel.id == "809040643593994251" || reaction.emoji.name === ":ticket:" && reaction.channel.id == "809040643593994251") {
        client.guild.channels.create(`ticket ${message.author.username}`, {
        permissionOverwrites: [
        {
            id: message.guild.roles.everyone,
            deny: ['VIEW_CHANNEL'],
        },
        {
            id: message.author.id,
            allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
        },
        {
            id: "745973047131111535",
            allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],   
        },
        {
            id: "745957715678986382",
            allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],   
        },
        {
            id: "816622827494178836",
            allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],   
        },
        {
            id: "816622821685985320",
            allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],   
        },
        {
            id: "811660541118382111",
            allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],   
        },
        {
            id: "700035991234412576",
            allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],   
        },
        ],
    type: "text",
    parent: '827269571253108757',
 });
}
})

client.on("message", async message => {
    if (message.author.bot) return
    
    if (message.channel.id == "838393649691099176" && message.content.includes(".link")) {
    } else if (message.channel.id == "838393649691099176") {
        message.delete()
        message.channel.send(":x: Please only use this channel to `.link` your account.").then(msg => {
            setTimeout(() => {
             msg.delete()
            }, 5000);
        })
    }

    const args = message.content.slice(1).trim().split(' ');
    const command = args.shift().toLowerCase(); //not bad here btw

    if (command == "announce") {
        if (message.member.roles.cache.some(r => r.name == "Admin") || message.member.roles.cache.some(r => r.name == "Manager") || message.member.roles.cache.some(r => r.name == "Owner")) {

            if (!args[0]) return message.channel.send(":x: Please add an announcement to this command!")
            var announcement = args.join(" ")
            message.delete()
            let announcementEmbed = new Discord.MessageEmbed()
                .setTitle("Announcement!")
                .setAuthor(`From ${message.author.username}`, message.author.displayAvatarURL({
                    dynamic: true
                }))
                .setDescription(announcement)
                .setFooter("Gapy")
                .setTimestamp()
                .setColor("#3498DB")
            message.channel.send(announcementEmbed)
            delete announcementEmbed
        } else {
            message.delete();
            message.channel.send(":x: You do not have the required permissions to run this command.");
        }
    }
    

    if (command == "ticket-open") {
        if (message.channel == "866059633953472512") {
            message.guild.channels.create(`ticket ${message.author.username}`, {
                 permissionOverwrites: [
                   {
                     id: message.guild.roles.everyone,
                     deny: ['VIEW_CHANNEL'],
                   },
                   {
                     id: message.author.id,
                     allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
                   },
                   {
                    id: "745973047131111535",
                    allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],   
                   },
                   {
                    id: "745957715678986382",
                    allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],   
                   },
                   {
                    id: "816622827494178836",
                    allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],   
                   },
                   {
                    id: "816622821685985320",
                    allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],   
                   },
                   {
                    id: "811660541118382111",
                    allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],   
                   },
                   {
                    id: "700035991234412576",
                    allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],   
                   },
                    ],
                type: "text",
                parent: '827269571253108757',
              }),
            message.delete(),
            message.channel.send("Creating a ticket for you now").then(msg => {
                setTimeout(() => {
                 msg.delete()
                }, 5000);
            });
        }
    }

    if (command == "bugreport") {
        if (message.channel == "866059633953472512") {
            message.guild.channels.create(`bugreport ${message.author.username}`, {
                 permissionOverwrites: [
                   {
                     id: message.guild.roles.everyone, 
                     deny: ['VIEW_CHANNEL'], 
                   },
                   {
                     id: message.author.id,
                     allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
                   },
                   {
                    id: "815952114521604096",
                    allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
                  },
                    ],
                type: "text",
                parent: '827269571253108757',
              }),
            message.delete(),
            message.channel.send("Creating a ticket for you now").then(msg => {
                setTimeout(() => {
                 msg.delete()
                }, 5000);
            })
        }
    }

    const setupTickets = new Discord.MessageEmbed()
            .setAuthor("Gapy")
            .setTitle("Tickets")
            .setDescription("🎫 - General Support \n⛑️ - Staff Application \n➕ - Suggestion \n🐛 - Bug Report")

    if (message.content == "!setuptickets" && message.channel.id == "809040643593994251" && message.member.roles.cache.some(r => r.name == "Admin") || message.content == "!setuptickets" && message.channel.id == "809040643593994251" && message.member.roles.cache.some(r => r.name == "Manager") || message.content == "!setuptickets" && message.channel.id == "809040643593994251" && message.member.roles.cache.some(r => r.name == "Owner")) {
        client.channels.cache.get("809040643593994251").send(setupTickets)
    };

    if (command == "staffapply") {
        if (message.channel == "866059633953472512") {
            message.guild.channels.create(`ticket ${message.author.username}`, {
                 permissionOverwrites: [
                   {
                     id: message.guild.roles.everyone, 
                     deny: ['VIEW_CHANNEL'], 
                   },
                   {
                     id: message.author.id,
                     allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
                   }
                    ],
                type: "text",
                parent: '827269571253108757',
              }),
            message.delete(),
            message.channel.send("Creating a ticket for you now").then(msg => {
                setTimeout(() => {
                 msg.delete()
                }, 5000);
            })
        }
    }

    if (command == "mediaapply") {
        if (message.channel == "866059633953472512") {
          message.guild.channels.create(`application ${message.author.username}`, {
            permissionOverwrites: [
              {
                id: message.guild.roles.everyone,
                deny: ['VIEW_CHANNEL'],
              },
              {
                id: message.author.id,
                allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
              },
              {
                id: "821855800409718854",
                allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
              },
              {
                id: "821855802695614494",
                allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
              },
            ],
            type: "text",
            parent: '866075437746749470',
          });
      
          message.delete();
      
          message.channel.send("Creating a ticket for you now").then((msg) => {
            setTimeout(() => {
              msg.delete();
            }, 5000);
          });
        }
      }

    if (command == "close" && message.member.roles.cache.some(r => r.name == "Admin") || command == "close" && message.member.roles.cache.some(r => r.name == "Manager") || command == "close" && message.member.roles.cache.some(r => r.name == "Owner")) {
        message.channel.send(`Ticket closing in 5 seconds by ${message.author.username}`)
        setTimeout(() => {
            message.channel.delete()
           }, 5000);
        
    } else {
    }

    if (command == "changelog") {
        if (message.member.roles.cache.some(r => r.name == "Admin") || message.member.roles.cache.some(r => r.name == "Manager") || message.member.roles.cache.some(r => r.name == "Owner")) {

            if (!args[1]) return message.channel.send(":x: Please add a changelog update to this command!")
            var changelog = args.join(" ")
            message.delete()
            let changelogEmbed = new Discord.MessageEmbed()
                .setTitle("Changelog update!")
                .setDescription(changelog)
                .setFooter("Gapy")
                .setTimestamp()
                .setColor("#3498DB")
            client.channels.cache.get("827587116430000138").send(changelogEmbed)
            delete changelogEmbed
        } else {
            message.delete();
            message.channel.send(":x: You do not have the required permissions to run this command.");
        }
    }

    if (command == "sclogpromo") {
        if (message.member.roles.cache.some(r => r.name == "Developer") || message.member.roles.cache.some(r => r.name == "Admin") || message.member.roles.cache.some(r => r.name == "Manager") || message.member.roles.cache.some(r => r.name == "Owner")) {

            
            var sclogjoined = args.join(" ").split(" -- ")
            var sclog = sclogjoined[0]
            var sclog2 = sclogjoined[1]

            if (!sclog2) return message.channel.send(":x: Please add a changelog update to this command!")

            message.delete()
            let sclogEmbed = new Discord.MessageEmbed()
                .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
                .setTitle("Staff Changelog Update!")
                .setDescription(`\`${sclog}\` was promoted to \`${sclog2}\``)
                .setFooter("Gapy")
                .setTimestamp()
                .setColor("#3498DB")
            client.channels.cache.get("863113073124442149").send(sclogEmbed)
            delete sclogEmbed
        } else {
            message.delete();
            message.channel.send(":x: You do not have the required permissions to run this command.");
        }
    }

    if (command == "sclogdemo") {
        if (message.member.roles.cache.some(r => r.name == "Developer") || message.member.roles.cache.some(r => r.name == "Admin") || message.member.roles.cache.some(r => r.name == "Manager") || message.member.roles.cache.some(r => r.name == "Owner")) {

            var sclogjoined = args.join(" ").split(" -- ")
            var sclog = sclogjoined[0]
            var sclog2 = sclogjoined[1]

            if (!sclog2) return message.channel.send(":x: Please add a changelog update to this command!")

            message.delete()
            let sclogEmbed = new Discord.MessageEmbed()
                .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
                .setTitle("Staff Changelog Update!")
                .setDescription(`\`${sclog}\` was demoted to \`${sclog2}\``)
                .setFooter("Gapy")
                .setTimestamp()
                .setColor("#3498DB")
            client.channels.cache.get("863113073124442149").send(sclogEmbed)
            delete sclogEmbed
        } else {
            message.delete();
            message.channel.send(":x: You do not have the required permissions to run this command.");
        }
    }


    if (command == "suggest" && message.channel.id == "863325297063231518") {

        if (message.channel.id != "863325297063231518") {
            return message.channel.send(":information_source: Please use <#863325297063231518> to make suggestions!")
        }

        if (!args[0]) return message.channel.send(":x: Please add a suggestion to this command!")

        var suggestion = args.join(" ")
        message.delete()

        message.channel.startTyping()
        let suggestionEmbed = new Discord.MessageEmbed()

            .setTitle("Suggestion")
            .setAuthor(`From ${message.author.tag}`, message.author.displayAvatarURL({
                dynamic: true
            }))
            .setDescription(`${message.author} has submitted the suggestion:\n\n\`${suggestion}\``)
            .setFooter("Gapy")
            .setTimestamp()
            .setColor("#3498DB")
        client.channels.cache.get("863319114764255242").send(suggestionEmbed).then(async mesg => {
            await mesg.react("👍")
            await mesg.react("👎")
            let submittedSuggestionEmbed = new Discord.MessageEmbed()
                .setTitle("Suggestion succesfully submitted!")
                .setColor("#57F287")
                .setDescription(`Thank you for your suggestion! [Click here](${mesg.url}) to view it!`)
                .setFooter("Gapy")
                .setTimestamp()
            message.channel.stopTyping()
            message.channel.send(submittedSuggestionEmbed).then(async msg => {
                setTimeout(() => {
                    msg.delete() //but the user can't view the message's link, i only gave it 30 secs for the time for them to notice the link
                }, 15000);
            })
        })
        delete submittedsuggestionEmbed
        return
    }
})

client.login(config.token);