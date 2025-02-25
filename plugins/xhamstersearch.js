let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
case 'xhamstersearch':
   if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
   query = args.join(" ")
   get_result = await fetchJson(`https://api.lolhuman.xyz/api/xhamstersearch?apikey=711994c4ea9aa5a0ec39f7f2&query=${query}`)
   get_result = get_result.result
   ini_txt = ""
   for (var x of get_result) {
       ini_txt += `Title : ${x.title}\n`
       ini_txt += `Views : ${x.views}\n`
       ini_txt += `Duration : ${x.duration}\n`
       ini_txt += `Link : ${x.link}\n\n`
     }
   reply(ini_txt)
}
handler.help = ['', 'earch'].map(v => 'xhamstersearch' + v + ' <search>')
handler.tags = ['downloader']
handler.command = /^xhs(earch)?$/i

module.exports = handler
