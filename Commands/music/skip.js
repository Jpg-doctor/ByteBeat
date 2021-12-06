module.exports = {
name:"skip",
aliases: ['s'],
desc: `Skips the current song.`,
usage: `To skip a song, you must type in the command \`BB.Skip\`.`,
code:`
$if[$message[1]==]
$skipSong
$else
$skipto[$message[1]]
$endif`
}