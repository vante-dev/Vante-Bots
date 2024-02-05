import { ActivityType } from 'discord.js';

// Doldurmanız gereken tek şeyler bunlardır.

const system = {
    serverID: '',
    mongoURL: '',
    owners: [],
    prefix: [],

    Presence: {
        Status: 'online',
        Type: ActivityType.Playing,
        Message: [],
    },

    Moderation: {
        Main: '',
        Stats: '',
        Controller: '',
    },

    Security: {
        Watcher: '',
        Backuper: '',
        Protector: '',
        vanityAuth: '',
        ownerAuth: '',
        
        Backups: [],
    },

    Welcome: {
        Tokens: [],
        Channel: [],
    },
}

export default system;
