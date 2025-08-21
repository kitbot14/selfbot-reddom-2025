const Discord = require("discord.js-selfbot-v13");
const {  language } = require("../../fonctions")

module.exports = {
  name: "help",
  description: "Menu Help",
  run: async (client, message, args, db, prefix) => {

    message.edit(await language(client, `
# __RD $B On Top__

➜ \`${prefix}support\`

** **                          ♫︎ __**RD**__ ♫︎

*Les règles sont faites pour ceux qui les suivent.*

\`${prefix}afk\` ☆ **Commandes d'AFK**
\`${prefix}antiraid\` ☆ **Commandes de protection de serveur**
\`${prefix}auto\` ☆ **Commandes d'automatismes**
\`${prefix}backup\` ☆ **Commandes backup**
\`${prefix}coin\` ☆ **Commandes pour les coins**
\`${prefix}configrpc\` ☆ **Customise ton activité**
\`${prefix}custom\` ☆ **Commandes d'emojis nitro sans avoir nitro**
\`${prefix}divers\` ☆ **Commandes pour des emojis claviers stylés**
\`${prefix}flood\` ☆ **Macro avec vos messages (configurable)**
\`${prefix}friends\` ☆ **Commandes pour tout ce qui est social**
\`${prefix}fun\` ☆ **Commandes de fun**
\`${prefix}fun2\` ☆ **Commandes pour + de fun**
\`${prefix}help\` ☆ **Menu d'aide (ce menu)**
\`${prefix}mod\` ☆ **Commandes de modération**
\`${prefix}niveau\` ☆ **Commandes de niveau sur le serveur**
\`${prefix}nsfw\` ☆ **Commandes de nsfw**
\`${prefix}raid\` ☆ **Commandes de raid**
\`${prefix}rpc\` ☆ **Commandes de RPC**
\`${prefix}settings\` ☆ **Commandes de paramètres**
\`${prefix}stalker\` ☆ **Commandes de stalk**
\`${prefix}status\` ☆ **Commande de statuts**
\`${prefix}token\` ☆ **Commandes de token**
\`${prefix}tools\` ☆ **Commandes de tools**
\`${prefix}utility\` ☆ **Commandes utiles**
\`${prefix}voc\` ☆ **Commandes de voc**`
                             
,`# __RD \$B On Top__  

➜ \`${prefix}support\`  

** **                          ♫︎ __**RD**__ ♫︎

*Rules are made for those who follow them.*  

\`${prefix}afk\` ☆ **AFK auto-respond and logger**
\`${prefix}antiraid\` ☆ **Server protection commands**  
\`${prefix}auto\` ☆ **Automation commands**
\`${prefix}backup\` ☆ **Backup commands**  
\`${prefix}coin\` ☆ **Coin-related commands**  
\`${prefix}configrpc\` ☆ **Customize your activity**  
\`${prefix}custom\` ☆ **Nitro emoji commands without having Nitro**  
\`${prefix}divers\` ☆ **Stylized keyboard emoji commands**  
\`${prefix}flood\` ☆ **Macro with your messages (configurable)**  
\`${prefix}friends\` ☆ **Social-related commands**  
\`${prefix}fun\` ☆ **Fun commands**  
\`${prefix}fun2\` ☆ **More fun commands**  
\`${prefix}help\` ☆ **Help menu (this menu)**  
\`${prefix}mod\` ☆ **Moderation commands**  
\`${prefix}niveau\` ☆ **Server level commands**  
\`${prefix}nsfw\` ☆ **NSFW commands**  
\`${prefix}raid\` ☆ **Raid commands**  
\`${prefix}rpc\` ☆ **RPC commands**
\`${prefix}settings\` ☆ **Settings commands**  
\`${prefix}stalker\` ☆ **Stalking commands**  
\`${prefix}status\` ☆ **Status commands**  
\`${prefix}token\` ☆ **Token commands**  
\`${prefix}tools\` ☆ **Tool commands**  
\`${prefix}utility\` ☆ **Useful commands**  
\`${prefix}voc\` ☆ **Voice-related commands**  
`))
  }
}; 
