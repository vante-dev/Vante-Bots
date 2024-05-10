import { ActivityType } from 'discord.js';

export const System = {
    serverID: '',
    mongooseURI: '',
    roots: [],

    Presence: {
        Status: 'online',
        Type: ActivityType.Playing,
        Message: ['Créated by Vante', 'Vante Was here ❤️', 'Vante ❤️ Discord'],
    },

    Prefix: [
        '.',
    ],

    Moderation: {
        Administrator: '',
        Controller: '',
        Statistics: '',
    },

    Security: {
        Guardian: '',
        VanityAuth: '',
        Backups: [],
    },

    Welcome: {
        Tokens: [],
        Channels: [],
    }
};
