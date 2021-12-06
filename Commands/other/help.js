module.exports = {
name: "Help",
desc: `Shows the Help panel.`,
usage: `\`BB.help\``,
code: `$if[$message==]
$title[Help & Support (https://discord.gg/eZyf85NDQC)]
$description[Please enter a command name to see it's individual information! Check all of the commands below:]
$addField[Music Commands:;\`BB.clear, BB.MusicChannel {#channel}, BB.pause(BB.||), BB.unpause(BB.>), BB.playspotify {spotify link}, BB.queue, BB.skip, BB.playyoutube {youtube link}.\`]
$footer[If you require additional assistance regarding one of our commands, 
then please use the help command and type any valid command. Doing so will give you more information about the selected command.]
$elseIf[$toLowercase[$message[1]]==fun]
$endelseIf
$else

$if[$commandInfo[$message[1];name]!=]
$title[$commandInfo[$message[1];name] Command]
$addField[Usage:;$commandInfo[$message[1];usage]]
$if[$commandInfo[$message[1];aliases]!=]
$addField[Aliases:;\`$commandinfo[$message[1];aliases]\`]
$endif
$addField[Description:;$commandinfo[$message[1];desc]]
$endif
    
$onlyIf[$commandInfo[$message;name]!=;This command doesnt exist.]
$endif
`
}