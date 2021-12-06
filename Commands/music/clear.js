module.exports = {
name: "clear",
aliases: ['c','leave', 'l'],
desc: `Clears the queue and stop the song.`,
usage: `To clear the music, you must type in the command \`BB.clear\`.`,
code: `
$title[Queue Cleared!]
$addfield[Notice:; I have left to reduce lag!]
$leaveVC
$clearSongQueue
$stopSong
$footer[Byte Dev Server: eZyf85NDQC]
`
}