module.exports = [{
type: 'musicStartCommand',
name: "music on start",
channel: "$getservervar[MusicChan]",
code: `$title[Music]
$addfield[Queue:;Now playing: $queue]
$addfield[Loop Status:;$loopStatus]
$addfield[Now Playing:;$songInfo[title]]
$footer[Byte Dev Server: eZyf85NDQC]`
}, {
name: "playspotify",
aliases: ['ps'],
desc: `Plays a song. ONLY SPOTIFY.`,
usage: `To play a spotify song, you must type in the command \`BB.playspotify {spotify link}\`.`,
code: `
$if[$getservervar[MusicChan]!=none]
$if[$message[1]!=]
$playSpotify[$message;name;yes;:x: An error has occured]
$else
:x: | Please link a spotify link.
$endif
$else
:x: | No music channel set do BB.musicchannel {#channel}
$endif`
}]