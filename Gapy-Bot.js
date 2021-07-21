const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
let awakeEmbed = new Discord.MessageEmbed().setColor("#57F287").setTitle("Awake").setDescription("I have woken up");
client.once("ready", () => {
    console.log("Bot is Ready");
    client.channels.cache.get("827179141039915058").send(awakeEmbed);
});
client.on("messageReactionAdd", async(reaction, user, message) => {
    //Add an event listener
    if (reaction.message.partial) await reaction.message.fetch();
    if (user.id === client.user.id) return; //If the reaction was from the bot, return
    if (!reaction.message.guild) return; //If the reaction was not in a guild
    if (
        (reaction.emoji.name === "🎫" && client.channel.id == "809040643593994251") || (reaction.emoji.name === ":ticket:" && reaction.channel.id == "809040643593994251")) {
        client.guild.channels.create(`ticket ${message.author.username}`, {
            permissionOverwrites: [{
                id: message.guild.roles.everyone,
                deny: ["VIEW_CHANNEL"],
            }, {
                id: message.author.id,
                allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"],
            }, {
                id: "745973047131111535",
                allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"],
            }, {
                id: "745957715678986382",
                allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"],
            }, {
                id: "816622827494178836",
                allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"],
            }, {
                id: "816622821685985320",
                allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"],
            }, {
                id: "811660541118382111",
                allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"],
            }, {
                id: "700035991234412576",
                allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"],
            }, ],
            type: "text",
            parent: "827269571253108757",
        });
    }
});
client.on("message", async(message) => {
    if (message.author.bot) return;
    if (message.channel.id == "838393649691099176" && message.content.includes(".link")) {} else if (message.channel.id == "838393649691099176") {
        message.delete();
        message.channel.send(":x: Please only use this channel to `.link` your account.").then((msg) => {
            setTimeout(() => {
                msg.delete();
            }, 5000);
        });
    }
    const args = message.content.slice(1).trim().split(" ");
    const command = args.shift().toLowerCase(); //not bad here btw
    if (command == "announce") {
        if (message.member.roles.cache.some((r) => r.name == "Admin") || message.member.roles.cache.some((r) => r.name == "Manager") || message.member.roles.cache.some((r) => r.name == "Owner")) {
            if (!args[0]) return message.channel.send(":x: Please add an announcement to this command!");
            var announcement = args.join(" ");
            message.delete();
            let announcementEmbed = new Discord.MessageEmbed().setTitle("Announcement!").setAuthor(`From ${message.author.username}`, message.author.displayAvatarURL({
                dynamic: true,
            })).setDescription(announcement).setFooter("Gapy").setTimestamp().setColor("#3498DB");
            message.channel.send(announcementEmbed);
            delete announcementEmbed;
        } else {
            message.delete();
            message.channel.send(":x: You do not have the required permissions to run this command.");
        }
    }
    if (command == "ticket-open") {
        if (message.channel == "866059633953472512") {
            message.guild.channels.create(`ticket ${message.author.username}`, {
                    permissionOverwrites: [{
                        id: message.guild.roles.everyone,
                        deny: ["VIEW_CHANNEL"],
                    }, {
                        id: message.author.id,
                        allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"],
                    }, {
                        id: "745973047131111535",
                        allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"],
                    }, {
                        id: "745957715678986382",
                        allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"],
                    }, {
                        id: "816622827494178836",
                        allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"],
                    }, {
                        id: "816622821685985320",
                        allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"],
                    }, {
                        id: "811660541118382111",
                        allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"],
                    }, {
                        id: "700035991234412576",
                        allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"],
                    }, ],
                    type: "text",
                    parent: "827269571253108757",
                }),
                message.delete(),
                message.channel.send("Creating a ticket for you now").then((msg) => {
                    setTimeout(() => {
                        msg.delete();
                    }, 5000);
                });
        }
    }
    if (command == "bugreport") {
        if (message.channel == "866059633953472512") {
            message.guild.channels.create(`bugreport ${message.author.username}`, {
                    permissionOverwrites: [{
                        id: message.guild.roles.everyone,
                        deny: ["VIEW_CHANNEL"],
                    }, {
                        id: message.author.id,
                        allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"],
                    }, {
                        id: "815952114521604096",
                        allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"],
                    }, ],
                    type: "text",
                    parent: "827269571253108757",
                }),
                message.delete(),
                message.channel.send("Creating a ticket for you now").then((msg) => {
                    setTimeout(() => {
                        msg.delete();
                    }, 5000);
                });
        }
    }
    const setupTickets = new Discord.MessageEmbed().setAuthor("Gapy").setTitle("Tickets").setDescription("🎫 - General Support \n⛑️ - Staff Application \n➕ - Suggestion \n🐛 - Bug Report");
    if (
        (message.content == "!setuptickets" && message.channel.id == "809040643593994251" && message.member.roles.cache.some((r) => r.name == "Admin")) || (message.content == "!setuptickets" && message.channel.id == "809040643593994251" && message.member.roles.cache.some((r) => r.name == "Manager")) || (message.content == "!setuptickets" && message.channel.id == "809040643593994251" && message.member.roles.cache.some((r) => r.name == "Owner"))) {
        client.channels.cache.get("809040643593994251").send(setupTickets);
    }
    let staffappEmbed = new Discord.MessageEmbed().setTitle("Staff Application").setAuthor(`${message.author.username}`).setDescription("Please answer the following questions in as much detail as possible:\n1. What is your IGN and timezone? (example: Bobsilowski & GMT)\n2. How old are you?\n3. What motivated you to apply for staff here at the FizzCore Network?\n4. What can you contribute to the staff team?\n5. Why should we pick you to join our staff team?\nAny questions?\nPlease wait for staff to comment on your application and then a high staff member to make a choice about your staff application!\nThanks, Staff Team, FizzCore").setTimestamp().setFooter(`Application by ${message.author.username}`);
    //if (command == "staffapply") {
    //  if (message.channel == "866059633953472512") {
    //    message.delete();
    //  message.channel.send("Creating a ticket for you now").then(msg => {
    //    setTimeout(() => {
    //      msg.delete()
    //               }, 5000);
    //         });
    //
    //      message.guild.channels.create(`ticket ${message.author.username}`, {
    //         permissionOverwrites: [
    //          {
    //            id: message.guild.roles.everyone,
    //          deny: ['VIEW_CHANNEL'],
    //      },
    //    {
    //    id: message.author.id,
    //                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
    //                    },
    //                  {
    //                 id: "745973047131111535",
    //               allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
    //            },
    //          {
    //         id: "745957715678986382",
    //       allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
    //    },
    //  {
    // id: "816622827494178836",
    //                       allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
    //                    },
    //                  {
    //                 id: "816622821685985320",
    //               allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
    //            },
    //          {
    //         id: "811660541118382111",
    //       allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
    //    },
    //  {
    //                       id: "700035991234412576",
    //                     allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
    //                  },
    //                 ],
    //        type: "text",
    //      parent: '827269571253108757',
    //})
    //            message.delete(),
    //          message.channel.send("Creating a ticket for you now").then(msg => {
    //            setTimeout(() => {
    //           msg.delete()
    //        }, 5000);
    //  }).then(channel => {
    //                channel.send(staffappEmbed)
    //          })
    //
    //      delete staffappEmbed
    //} else {
    //    message.delete()
    //    message.reply(":x: Please use <#866059633953472512> to complete this action")
    //    setTimeout(() => {
    //       message.delete()
    //      }, 5000);}
    //}});
    if (command == "mediaapply") {
        if (message.channel == "866059633953472512") {
            message.guild.channels.create(`application ${message.author.username}`, {
                permissionOverwrites: [{
                    id: message.guild.roles.everyone,
                    deny: ["VIEW_CHANNEL"],
                }, {
                    id: message.author.id,
                    allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"],
                }, {
                    id: "821855800409718854",
                    allow: ["VIEW_CHANNEL", "SEND_MESSAGES"],
                }, {
                    id: "821855802695614494",
                    allow: ["VIEW_CHANNEL", "SEND_MESSAGES"],
                }, ],
                type: "text",
                parent: "866075437746749470",
            });
            message.delete();
            message.channel.send("Creating a ticket for you now").then((msg) => {
                setTimeout(() => {
                    msg.delete();
                }, 5000);
            });
        } else {
            message.delete();
            message.reply(":x: Please use <#866059633953472512> to complete this action");
            setTimeout(() => {
                message.delete();
            }, 5000);
        }
    }
    if (
        (command == "close" && message.member.roles.cache.some((r) => r.name == "Admin")) || (command == "close" && message.member.roles.cache.some((r) => r.name == "Manager")) || (command == "close" && message.member.roles.cache.some((r) => r.name == "Owner"))) {
        message.channel.send(`Ticket closing in 5 seconds by ${message.author.username}`);
        setTimeout(() => {
            message.channel.delete();
        }, 5000);
    }
    if (command == "changelog") {
        if (message.member.roles.cache.some((r) => r.name == "Admin") || message.member.roles.cache.some((r) => r.name == "Manager") || message.member.roles.cache.some((r) => r.name == "Owner")) {
            if (!args[1]) return message.channel.send(":x: Please add a changelog update to this command!");
            var changelog = args.join(" ");
            message.delete();
            let changelogEmbed = new Discord.MessageEmbed().setTitle("Changelog update!").setDescription(changelog).setFooter("Gapy").setTimestamp().setColor("#3498DB");
            client.channels.cache.get("827587116430000138").send(changelogEmbed);
            delete changelogEmbed;
        } else {
            message.delete();
            message.channel.send(":x: You do not have the required permissions to run this command.");
        }
    }
    if (command == "sclogpromo") {
        if (message.member.roles.cache.some((r) => r.name == "Developer") || message.member.roles.cache.some((r) => r.name == "Admin") || message.member.roles.cache.some((r) => r.name == "Manager") || message.member.roles.cache.some((r) => r.name == "Owner")) {
            var sclogjoined = args.join(" ").split(" -- ");
            var sclog = sclogjoined[0];
            var sclog2 = sclogjoined[1];
            if (!sclog2) return message.channel.send(":x: Please add a changelog update to this command!");
            message.delete();
            let sclogEmbed = new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.displayAvatarURL({
                dynamic: true
            })).setTitle("Staff Changelog Update!").setDescription(`\`${sclog}\` was promoted to \`${sclog2}\``).setFooter("Gapy").setTimestamp().setColor("#3498DB");
            client.channels.cache.get("863113073124442149").send(sclogEmbed);
            client.channels.cache.get("745767855244705822").send(sclogEmbed);
            delete sclogEmbed;
        } else {
            message.delete();
            message.channel.send(":x: You do not have the required permissions to run this command.");
        }
    }
    if (command == "sclogdemo") {
        if (message.member.roles.cache.some((r) => r.name == "Developer") || message.member.roles.cache.some((r) => r.name == "Admin") || message.member.roles.cache.some((r) => r.name == "Manager") || message.member.roles.cache.some((r) => r.name == "Owner")) {
            var sclogjoined = args.join(" ").split(" -- ");
            var sclog = sclogjoined[0];
            var sclog2 = sclogjoined[1];
            if (!sclog2) return message.channel.send(":x: Please add a changelog update to this command!");
            message.delete();
            let sclogEmbed = new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.displayAvatarURL({
                dynamic: true
            })).setTitle("Staff Changelog Update!").setDescription(`\`${sclog}\` was demoted to \`${sclog2}\``).setFooter("Gapy").setTimestamp().setColor("#3498DB");
            client.channels.cache.get("863113073124442149").send(sclogEmbed);
            client.channels.cache.get("745767855244705822").send(sclogEmbed);
            delete sclogEmbed;
        } else {
            message.delete();
            message.channel.send(":x: You do not have the required permissions to run this command.");
        }
    }
    if (command == "apply") {
        if (message.channel.id == "866059633953472512") {
            message.delete();
            //return message.channel.send("Staff Applications are currently closed!").then(r => r.delete({ timeout: 5000 }))
            let color = "0000FF";
            var randomNumber = Math.floor(Math.random() * 100000) + 1;
            let embed = new Discord.MessageEmbed().setTitle(`Application started in DM by ${message.author.username}!`).setColor(color);
            message.channel.send(embed).then((msg) => {
                msg.delete({
                    timeout: 5000
                });
            });
            const filter = (m) => m.author.id === message.author.id;
            let startembed = new Discord.MessageEmbed().setTitle(`Application Started - Type "cancel" at any time to cancel the application!`).setColor(color);
            let q1embed = new Discord.MessageEmbed().setColor(color).setTitle("What is your minecraft username?");
            let q2embed = new Discord.MessageEmbed().setColor(color).setTitle("How old are you?");
            let q3embed = new Discord.MessageEmbed().setColor(color).setTitle("What is your timezone?");
            let q4embed = new Discord.MessageEmbed().setColor(color).setTitle("Are you able to record gameplay?");
            let q5embed = new Discord.MessageEmbed().setColor(color).setTitle("Do you have a mic to communicate via voice chat?");
            let q6embed = new Discord.MessageEmbed().setColor(color).setTitle("When did you first join our server?");
            let q7embed = new Discord.MessageEmbed().setColor(color).setTitle("How much time do you have to contribute to our server daily?");
            let q8embed = new Discord.MessageEmbed().setColor(color).setTitle("What server do you play the most, as in Skyblock, Factions, Survival, Creative, etc.");
            let q9embed = new Discord.MessageEmbed().setColor(color).setTitle("Have you been previously banned or muted? If so, please explain why");
            let q10embed = new Discord.MessageEmbed().setColor(color).setTitle("Do you have any previous staff experience? If so, elaborate (Provide proof)");
            let q11embed = new Discord.MessageEmbed().setColor(color).setTitle("What position are you applying for? (Helper, a specific team)");
            let q12embed = new Discord.MessageEmbed().setColor(color).setTitle("How will your presence benefit our staff team and server? Is there anything in particular that you believe that you can help improve?");
            let q13embed = new Discord.MessageEmbed().setColor(color).setTitle("Have you made any previous applications in the past for our server? (If so please link)");
            let q14embed = new Discord.MessageEmbed().setColor(color).setTitle("Are you currently staff on any other server? (Provide proof)");
            let q15embed = new Discord.MessageEmbed().setColor(color).setTitle("Do you have an issue with a staff member that will stop you from working with them?");
            let q16embed = new Discord.MessageEmbed().setColor(color).setTitle("How well do you understand the rules?");
            let q17embed = new Discord.MessageEmbed().setColor(color).setTitle("Do you understand staff can not scam and must treat all players equally?");
            let confirmembed = new Discord.MessageEmbed().setColor(color).setTitle("Would you like to submit?\nReact with ✅ to confirm!");
            let cancelembed = new Discord.MessageEmbed().setColor(color).setTitle("Cancelled.");
            let submitedembed = new Discord.MessageEmbed().setColor(color).setTitle("Application Successfully Summited").setFooter(`Application ID: #${randomNumber}`).setTimestamp()
            const msg = await message.author.send(startembed);
            msg.channel.send(q1embed);
            msg.channel.awaitMessages(filter, {
                max: 1
            }).then(async(q1) => {
                if (q1.first().content == "cancel") {
                    return msg.channel.send(cancelembed);
                }
                msg.channel.send(q2embed);
                msg.channel.awaitMessages(filter, {
                    max: 1
                }).then(async(q2) => {
                    if (q2.first().content == "cancel") {
                        return msg.channel.send(cancelembed);
                    }
                    msg.channel.send(q3embed);
                    msg.channel.awaitMessages(filter, {
                        max: 1
                    }).then(async(q3) => {
                        if (q3.first().content == "cancel") {
                            return msg.channel.send(cancelembed);
                        }
                        msg.channel.send(q4embed);
                        msg.channel.awaitMessages(filter, {
                            max: 1
                        }).then(async(q4) => {
                            if (q4.first().content == "cancel") {
                                return msg.channel.send(cancelembed);
                            }
                            msg.channel.send(q5embed);
                            msg.channel.awaitMessages(filter, {
                                max: 1
                            }).then(async(q5) => {
                                if (q5.first().content == "cancel") {
                                    return msg.channel.send(cancelembed);
                                }
                                msg.channel.send(q6embed);
                                msg.channel.awaitMessages(filter, {
                                    max: 1
                                }).then(async(q6) => {
                                    if (q6.first().content == "cancel") {
                                        return msg.channel.send(cancelembed);
                                    }
                                    msg.channel.send(q7embed);
                                    msg.channel.awaitMessages(filter, {
                                        max: 1
                                    }).then(async(q7) => {
                                        if (q7.first().content == "cancel") {
                                            return msg.channel.send(cancelembed);
                                        }
                                        msg.channel.send(q8embed);
                                        msg.channel.awaitMessages(filter, {
                                            max: 1
                                        }).then(async(q8) => {
                                            if (q8.first().content == "cancel") {
                                                return msg.channel.send(cancelembed);
                                            }
                                            msg.channel.send(q9embed);
                                            msg.channel.awaitMessages(filter, {
                                                max: 1
                                            }).then(async(q9) => {
                                                if (q9.first().content == "cancel") {
                                                    return msg.channel.send(cancelembed);
                                                }
                                                msg.channel.send(q10embed);
                                                msg.channel.awaitMessages(filter, {
                                                    max: 1
                                                }).then(async(q10) => {
                                                    if (q10.first().content == "cancel") {
                                                        return msg.channel.send(cancelembed);
                                                    }
                                                    msg.channel.send(q11embed);
                                                    msg.channel.awaitMessages(filter, {
                                                        max: 1
                                                    }).then(async(q11) => {
                                                        if (q11.first().content == "cancel") {
                                                            return msg.channel.send(cancelembed);
                                                        }
                                                        msg.channel.send(q12embed);
                                                        msg.channel.awaitMessages(filter, {
                                                            max: 1
                                                        }).then(async(q12) => {
                                                            if (q12.first().content == "cancel") {
                                                                return msg.channel.send(cancelembed);
                                                            }
                                                            msg.channel.send(q13embed);
                                                            msg.channel.awaitMessages(filter, {
                                                                max: 1
                                                            }).then(async(q13) => {
                                                                if (q13.first().content == "cancel") {
                                                                    return msg.channel.send(cancelembed);
                                                                }
                                                                msg.channel.send(q14embed);
                                                                msg.channel.awaitMessages(filter, {
                                                                    max: 1
                                                                }).then(async(q14) => {
                                                                    if (q14.first().content == "cancel") {
                                                                        return msg.channel.send(cancelembed);
                                                                    }
                                                                    msg.channel.send(q15embed);
                                                                    msg.channel.awaitMessages(filter, {
                                                                        max: 1,
                                                                    }).then(async(q15) => {
                                                                        if (q15.first().content == "cancel") {
                                                                            return msg.channel.send(cancelembed);
                                                                        }
                                                                        msg.channel.send(q16embed);
                                                                        msg.channel.awaitMessages(filter, {
                                                                            max: 1,
                                                                        }).then(async(q16) => {
                                                                            if (q16.first().content == "cancel") {
                                                                                return msg.channel.send(cancelembed);
                                                                            }
                                                                            msg.channel.send(q17embed);
                                                                            msg.channel.awaitMessages(filter, {
                                                                                max: 1
                                                                            }).then(async(q17) => {
                                                                                if (q17.first().content == "cancel") {
                                                                                    return msg.channel.send(cancelembed);
                                                                                }
                                                                                const a = await msg.channel.send(confirmembed);
                                                                                await a.react("✅");
                                                                                await a.react("❌");
                                                                                a.awaitReactions(
                                                                                    (reaction, user) => user.id === message.author.id && (reaction.emoji.name === "✅" || reaction.emoji.name === "❌"), {
                                                                                        max: 1
                                                                                    }).then(async(confirmreaction) => {
                                                                                    if (confirmreaction.first().emoji.name === "✅") {
                                                                                        msg.channel.send(submitedembed);
                                                                                        let embed = new Discord.MessageEmbed().setTitle("----------New-Staff-Application----------").setColor(color).addField("Minecraft Username? -", `${
                                                                        q1.first()
                                                                          .content
                                                                      }`).addField("Age? -", `${
                                                                        q2.first()
                                                                          .content
                                                                      }`).addField("What is your timezone and when are you most active in your timezone? -", `${
                                                                        q3.first()
                                                                          .content
                                                                      }`).addField("Are you able to record up to the hacker report standards? -", `${
                                                                        q4.first()
                                                                          .content
                                                                      }`).addField("Do you have a mic to communicate via voice chat? -", `${
                                                                        q5.first()
                                                                          .content
                                                                      }`).addField("When did you first join our server? -", `${
                                                                        q6.first()
                                                                          .content
                                                                      }`).addField("How much time do you have to contribute to our server daily/weekly? -", `${
                                                                        q7.first()
                                                                          .content
                                                                      }`).addField("What server do you play the most, as in Skyblock, Factions, Survival, Creative, etc. -", `${
                                                                        q8.first()
                                                                          .content
                                                                      }`).addField("Have you been previously banned or muted? If so, please explain why -", `${
                                                                        q9.first()
                                                                          .content
                                                                      }`).addField("Do you have any previous staff experience? If so, elaborate (Provide proof) -", `${
                                                                        q10.first()
                                                                          .content
                                                                      }`).addField("What position are you applying for? (Helper, a specific team) -", `${
                                                                        q11.first()
                                                                          .content
                                                                      }`).addField("How will your presence benefit our staff team and server? Is there anything in particular that you believe that you can help improve? -", `${
                                                                        q12.first()
                                                                          .content
                                                                      }`).addField("Have you made any previous applications in the past for our server? (If so please link) -", `${
                                                                        q13.first()
                                                                          .content
                                                                      }`).addField("Are you currently staff on any other server? (Provide proof) -", `${
                                                                        q14.first()
                                                                          .content
                                                                      }`).addField("Do you have an issue with a staff member that will stop you from working with them? -", `${
                                                                        q15.first()
                                                                          .content
                                                                      }`).addField("How well do you understand the rules? -", `${
                                                                        q16.first()
                                                                          .content
                                                                      }`).addField("Do you understand staff can not scam and must treat all players equally? -", `${
                                                                        q17.first()
                                                                          .content
                                                                      }`).setFooter(`Applicant: ${message.member.user.tag}/${message.member.user.id} • Application ID: #${randomNumber}`).setTimestamp();
                                                                                        let applicationsChannel = message.guild.channels.cache.find(
                                                                                            (channel) => channel.name == "staff-applications");
                                                                                        if (!applicationsChannel) return;
                                                                                        applicationsChannel.send(embed);
                                                                                    } else {
                                                                                        return msg.channel.send(cancelembed);
                                                                                    }
                                                                                });
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
            delete randomNumber
        } else {
            message.delete()
            message.channel.send(":x: - Please use <#866059633953472512> to complete this action").then((msg) => {
                setTimeout(() => {
                    msg.delete();
                }, 5000);
            })
        }
    }
        if (command == "suggest" && message.channel.id == "863325297063231518") {
            if (message.channel.id != "863325297063231518") {
                return message.channel.send(":information_source: Please use <#863325297063231518> to make suggestions!");
            }
            if (!args[0]) return message.channel.send(":x: Please add a suggestion to this command!");
            var suggestion = args.join(" ");
            message.delete();
            message.channel.startTyping();
            let suggestionEmbed = new Discord.MessageEmbed().setTitle("Suggestion").setAuthor(`From ${message.author.tag}`, message.author.displayAvatarURL({
                dynamic: true,
            })).setDescription(`${message.author} has submitted the suggestion:\n\n\`${suggestion}\``).setFooter("Gapy").setTimestamp().setColor("#3498DB");
            client.channels.cache.get("863319114764255242").send(suggestionEmbed).then(async(mesg) => {
                await mesg.react("👍");
                await mesg.react("👎");
                let submittedSuggestionEmbed = new Discord.MessageEmbed().setTitle("Suggestion succesfully submitted!").setColor("#57F287").setDescription(`Thank you for your suggestion! [Click here](${mesg.url}) to view it!`).setFooter("Gapy").setTimestamp();
                message.channel.stopTyping();
                message.channel.send(submittedSuggestionEmbed).then(async(msg) => {
                    setTimeout(() => {
                        msg.delete(); //but the user can't view the message's link, i only gave it 30 secs for the time for them to notice the link
                    }, 15000)
                })
            });
            delete submittedsuggestionEmbed;
            return;
        }

        if (command == "accept") {
            if (!message.member.hasPermission("MANAGE_GUILD")) return errors.noPerms(message, "MANAGE_GUILD");
            let member = message.mentions.members.first() || message.guild.members.cache.get(args[1]) || message.guild.members.cache.find((x) => x.user.username.toLowerCase() === args.slice(1).join(' ') || x.user.username === args[1])
            if (!member) return message.channel.send(`Hey there! It may help if you give me someone to accept into the staff team.`);
            if (member.id === message.author.id) return message.channel.send(`Imagine trying to accept yourself!`)
            let acceptEmbed = new Discord.MessageEmbed().setAuthor('Accepted!').setDescription(`Your application in **${message.guild.name}** has been accepted. Congratulations! Please contact ${message.author.username} to arrange an interview/discuss the future of your staff journey at FizzCore.`).setColor("00FF00")
            member.send(acceptEmbed).catch(() => message.channel.send(`Cannot dm this user`))
            message.delete()
            message.channel.send("Accepted").then(async(msg) => {
                setTimeout(() => {
                    msg.delete(); //but the user can't view the message's link, i only gave it 30 secs for the time for them to notice the link
                }, 5000);
            })
            delete member
            delete acceptEmbed
        }

        if (command == "deny") {
            if (message.channel == "866474629794496522") {
                if (!message.member.hasPermission("MANAGE_GUILD")) return errors.noPerms(message, "MANAGE_GUILD");
                let member = message.mentions.members.first() || message.guild.members.cache.get(args[1]) || message.guild.members.cache.find((x) => x.user.username.toLowerCase() === args.slice(1).join(' ') || x.user.username === args[1])
                if (!member) return message.channel.send(`Hey there! It may help if you give me someone to deny.`);
                if (member.id === message.author.id) return message.channel.send(`Imagine trying to deny yourself!`)
                let denyEmbed = new Discord.MessageEmbed().setAuthor('Denied!').setDescription(`Your application in **${message.guild.name}** has been denied. Please contact ${message.author.username} for more details.`).setColor("ff0000")
                member.send(denyEmbed).catch(() => message.channel.send(`Cannot dm this user`))
                message.delete()
                message.channel.send("Denied").then(async(msg) => {
                    setTimeout(() => {
                        msg.delete(); //but the user can't view the message's link, i only gave it 30 secs for the time for them to notice the link
                    }, 5000);
                })
                delete member
                delete denyEmbed
            };
        }
})
client.login(config.token);