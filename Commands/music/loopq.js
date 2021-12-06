module.exports = {
name: "Loopqueue",
aliases: ['lq', 'lque', 'loopq', 'loopque'],
desc: `Loops the queue.`,
usage: `To loop the queue, you must type in the command \`BB.Loopqueue\`.`,
code: `
$title[Loop]
$loopQueue
$addfield[Now Looping:; $queue]
$footer[Byte Dev Server: eZyf85NDQC]`
}