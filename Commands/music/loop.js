module.exports = {
name: "Loopsong",
aliases: ['ls', 'loops'],
desc: `Loops the song.`,
usage: `To loop the current song, you must type in the command \`BB.Loopsong\`.`,
code: `
$title[Loop]
$loopSong
$addfield[Now Looping:;$songInfo[title]]
$footer[Byte Dev Server: eZyf85NDQC]`
}