/**
   * Created By Spyro.
   * Contact Me on wa.me/687772777
   * Follow https://github.com/spyro-ser-ofc
**/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'bee20bed87',
}
//======================================//

global.wm = '𝑺𝒑𝒚𝒓𝒐 𝒔𝒆𝒓✞︎'
global.ucpn = ''

//================= Url =================//
global.linkgc = 'https://chat.whatsapp.com/CUCsW6BWfmJLJwJgPQIaKM'
global.linkig = 'https://www.instagram.com/reel/Ccx79E0A8Rt/?igshid=YmMyMTA2M2Y='
global.linkyt = 'https://youtu.be/RnpyRe_7jZA'
global.linkfb = 'https://fb.watch/aYv0jAffAO'
global.web = 'https://raselcomel.github.io'
global.web1 = 'https://anu.rasell.repl.co'
global.linkgh = 'https://github.com/spyro-ser-ofc'

global.session = process.env.SESSION_ID|| ''
global.titlink = 'Folllow me on Instagram'
global.bodlink = '𝑺𝒑𝒚𝒓𝒐 𝑴𝒅'
// Other
global.watermark = '«𝗦𝗣𝗬𝗥𝗢 𝗠𝗗»🇮🇳'
global.owner = ['919778383987']
global.premium = ['919778383987']
global.packname = '𝗦𝗣𝗬𝗥𝗢-𝐌𝐃'
global.author = '𝑆𝑝𝑦𝑟𝑜-𝑜𝑓𝑓𝑖𝑐𝑖𝑎𝑙'
global.sessionName = 'spyro'
global.prefa = ['','!','.','🐦',',','*']
global.sp = '✰'
global.mess = {
    success: '𝑺𝒖𝒄𝒄𝒆𝒔𝒔✔︎',
    admin: 'Group Admin Special Features!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'Bot Owner Special Features',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'Bot Number Users Special Feature',
    wait: 'Loading...',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/spyro.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
