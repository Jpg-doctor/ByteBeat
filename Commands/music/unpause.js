module.exports = {
name: "unpause",
aliases: ['>'],
desc: `Un-pauses the song.`,
usage: `To un-pause the music, you must type in the command \`BB.Unpause\` or \`BB.>\`.`,
code: `
$title[Unpaused!]
$addfield[To pause:;\`BB.pause\` or \`BB.||\`]
$resumeSong
$footer[Byte Dev Server: eZyf85NDQC]`
}