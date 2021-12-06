module.exports = {
name: "playyoutube",
aliases: ['py'],
desc: `Plays a song. ONLY YOUTUBE.`,
usage: `To play a youtube video, you must type in the command \`BB.playyoutube {youtube name}\`.`,
code: `
$if[$getservervar[MusicChan]!=none]
$if[$message[1]!=]
$playSong[$message;30s;yes;yes;:x: Could not play song!]
$joinVC[$voiceID[$authorid]]
$else
:x: | Please link a youtube link.
$endif
$else
:x: | No music channel set do BB.musicchannel {#channel}
$endif`
}