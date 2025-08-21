const fs = require('fs');
const path = require('path');
const { language } = require("../../fonctions");

const filePath = path.join(__dirname, "../../commands/Premuim/flood.json");

function loadFloodData() {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify({}));
    }
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function saveFloodData(data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

module.exports = {
    name: 'flood',
    run: async (client, message, args, db, prefix) => {
        await message.delete();

        const data = loadFloodData();
        const userId = message.author.id;
        const subCommand = args[0];
        const MAX_PHRASES = 100;

        if (!data[userId]) data[userId] = [];

        switch (subCommand) {
            case 'add': {
                if (data[userId].length >= MAX_PHRASES) {
                    return message.channel.send('Vous avez atteint la limite de 100 phrases. Supprimez-en pour en ajouter de nouvelles.');
                }

                const phrase = args.slice(1).join(' ');
                if (!phrase) return message.channel.send('Veuillez spécifier une phrase à ajouter.');

                data[userId].push(phrase);
                saveFloodData(data);

                return message.channel.send(`Phrase ajoutée : "${phrase}"`);
            }
                
            case 'change': {
                const index = parseInt(args[1], 10) - 1;
                const newPhrase = args.slice(2).join(' ');

                if (isNaN(index) || index < 0 || index >= data[userId].length) {
                    return message.channel.send('Index invalide.');
                }
                if (!newPhrase) {
                    return message.channel.send('Veuillez spécifier une nouvelle phrase.');
                }

                data[userId][index] = newPhrase;
                saveFloodData(data);

                return message.channel.send(`Phrase modifiée : "${newPhrase}"`);
            }

            case 'remove': {
                const index = parseInt(args[1], 10) - 1;

                if (isNaN(index) || index < 0 || index >= data[userId].length) {
                    return message.channel.send('Index invalide.');
                }

                const removedPhrase = data[userId].splice(index, 1);
                saveFloodData(data);

                return message.channel.send(`Phrase supprimée : "${removedPhrase}"`);
            }

            case 'removeall': {
                if (data[userId].length === 0) {
                    return message.channel.send('Vous n\'avez aucune phrase à supprimer.');
                }

                data[userId] = [];
                saveFloodData(data);

                return message.channel.send('Toutes vos phrases ont été supprimées.');
            }

case 'list': {
    if (data[userId].length === 0) {
        return message.channel.send('Vous n\'avez aucune phrase enregistrée.');
    }

    let list = data[userId].map((phrase, i) => `${i + 1}. ${phrase}`).join('\n');
    
    const prefix = 'Voici vos phrases enregistrées :\n';

    const maxLength = 2000 - prefix.length;

    while (list.length > maxLength) {
        const chunk = list.slice(0, maxLength);
        await message.channel.send(`${prefix}${chunk}`);
        list = list.slice(maxLength);
    }

    if (list.length > 0) {
        await message.channel.send(`${prefix}${list}`);
    }

    return;
}


          case 'start': {
    if (data[userId].length === 0) {
        return message.channel.send('Vous n\'avez aucune phrase à envoyer.');
    }

    const targetId = args[1];  
    let target;
    let userIdsToPing = [];

    if (args.length > 2) {
        userIdsToPing = args.slice(2);  
    }

    if (targetId) {
        try {
            target = await client.channels.fetch(targetId).catch(() => null);
            if (!target || !target.isText()) {
                target = await client.users.fetch(targetId).catch(() => null);
                if (target) {
                    userIdsToPing = [targetId]; 
                } else {
                    return message.channel.send("ID invalide. Ni un salon ni un utilisateur trouvé.");
                }
            }
        } catch (err) {
            console.error("Erreur lors de la récupération de l'ID fourni:", err);
            return message.channel.send("Erreur lors de la récupération de l'ID fourni.");
        }
    } else {
        target = message.channel;
    }

for (const phrase of data[userId]) {
    if (target.send) {
        let messageToSend = phrase;

        userIdsToPing.forEach(userId => {
            messageToSend += ` <@${userId}>`;
        });

        await target.send(messageToSend);
    }
}
    if (global.gc) {
        global.gc();
        console.log("SPAM GARBAGE COLLECTOR ACTIVATED"); 
    }
    

    return;
}


default: {
    const helpMessage = await language(
        client,
        `
** **                          ♫︎ __**RD - Flood**__ ♫︎

\`${prefix}flood add (phrase)\` ➜ **Ajoute une phrase à ton flood**
\`${prefix}flood change [index] [phrase]\` ➜ **Change une de tes phrases**
\`${prefix}flood list\` ➜ **Affiche la liste de tes phrases**
\`${prefix}flood remove [index]\` ➜ **Supprime une phrase de ton flood**
\`${prefix}flood removeall\` ➜ **Supprime toutes les phrases de ton flood**
\`${prefix}flood start\` ➜ **Lance le flood**
\`${prefix}flood start (id salon)\` ➜ **Lance le flood dans un salon spécifique**
\`${prefix}flood start (id salon) (id user)\` ➜ **Lance le flood dans un salon spécifique + ping d'un user**
`,
        `
** **                          ♫︎ __**RD - Flood**__ ♫︎

\`${prefix}flood add (phrase)\` ➜ **Add a phrase to your flood**
\`${prefix}flood change [index] [phrase]\` ➜ **Change one of your sentences**
\`${prefix}flood list\` ➜ **Show your phrase list**
\`${prefix}flood remove [index]\` ➜ **Remove a phrase from your flood**
\`${prefix}flood removeall\` ➜ **Remove all phrases from your flood**
\`${prefix}flood start\` ➜ **Start the flood**
\`${prefix}flood start (channel ID)\` ➜ **Start the flood in a specific channel**
\`${prefix}flood start (channel ID) (user ID)\` ➜ **Start the flood in a specific channel + ping a user**
`
    );

    if (!helpMessage) return message.channel.send("Erreur : message vide.");
    return message.channel.send(helpMessage);
  
            }
        }
    }
};
