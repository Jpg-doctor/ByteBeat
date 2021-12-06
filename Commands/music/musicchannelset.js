module.exports = {
name: "MusicChannel",
aliases: ['mc'],
desc: `Music channel is where the queue will show up.`,
usage: `To change the music channel, you must type in the command \`BB.MusicChannel\`.`,
code: `

$if[$message==]
$if[$getServerVar[MusicChan]==none]
$title[Music Channel]
$addfield[Current Music Channel:;None!]
$addfield[NOTICE:;To change/set the music channel please do \`BB.musicchannel {#channel}\`]
$footer[Byte Dev Server: eZyf85NDQC]
$elseif[$getServerVar[MusicChan]!=None]
$title[Music Channel]
$addfield[Current music channel:;$channel[$getservervar[MusicChan];mention]]
$addfield[NOTICE:;To change/set the music channel please do \`BB.musicchannel {#channel}\`]
$footer[Byte Dev Server: eZyf85NDQC]
$endelseif
$endif
$endif

$if[$mentionedChannels[1]!=]
$setServerVar[MusicChan;$mentionedChannels[1]]
$title[Music Channel Set!]
$addfield[New music channel:;$channel[$mentionedChannels[1];mention]]
$footer[Byte Dev Server: eZyf85NDQC]
$endif`
}