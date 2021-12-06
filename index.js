const aoijs = require("aoi.js")
const keepAlive = require("./server");
const mySecret = process.env['TOKEN']

const bot = new aoijs.Bot({
token: mySecret, //Discord Bot Token
prefix: "BB." //Discord Bot Prefix
})

bot.variables({
MusicChan: "none",
})

bot.status({
  text: "for BB.help!",
  type: "WATCHING",
  time: 12
})
bot.status({
  text: "some nice beats! (BB.Help)",
  type: "PLAYING",
  time: 12
})
bot.status({
  text: "over $serverCount servers! (BB.Help)",
  type: "WATCHING",
  time: 12
})
//Events
bot.onMessage()

//Command Handler / Loads files
bot.loadCommands(`./Commands/`)


//Ready Event
bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})

keepAlive();