module.exports = {
name: "pause",
aliases: ['||'],
desc: `Pauses the song.`,
usage: `To pause the music, you must type in the command \`BB.Pause\` or \`BB.||\`.`,
code: `
$title[Paused!]
$addfield[To unpause:;\`BB.unpause\` or \`BB.>\`]
$pauseSong
$footer[Byte Dev Server: eZyf85NDQC]`
}