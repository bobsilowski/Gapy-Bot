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

client.on("message", (message) => {
    if (message.author.bot) return

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
            .setDescription(`${message.author} has submitted a suggestion!\n\n\`${suggestion}\``)
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