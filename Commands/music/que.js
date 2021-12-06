module.exports = {
name: "queue",
aliases: ['q', 'que'],
desc: `Shows the queue.`,
usage: `To veiw the queue, you must type in the command \`BB.Queue\`.`,
code: `
$title[Queue]
$addfield[Now playing:;$queue]
$footer[Byte Dev Server: eZyf85NDQC]`
}