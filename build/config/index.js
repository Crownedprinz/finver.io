"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || "development";
var envFound = dotenv_1.default.config();
if (envFound.error) {
    // This error should crash whole process
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
}
// {
//   parsed: { DB_HOST: 'localhost', DB_USER: 'root', DB_PASS: 's1mpl3' }
// }
exports.default = {
    /**
     * Your favorite port
     */
    port: parseInt(process.env.PORT, 10),
    /**
     * That long string from mlab
     */
    databaseURL: process.env.MONGODB_URI,
    /**
     * Your secret sauce
     */
    jwtSecret: process.env.JWT_SECRET,
    jwtAlgorithm: process.env.JWT_ALGO,
    /**
     * Used by winston logger
     */
    logs: {
        level: process.env.LOG_LEVEL || "silly",
    },
    /**
     * Agenda.js stuff
     */
    agenda: {
        dbCollection: process.env.AGENDA_DB_COLLECTION,
        pooltime: process.env.AGENDA_POOL_TIME,
        concurrency: parseInt(process.env.AGENDA_CONCURRENCY, 10),
    },
    /**
     * Agendash config
     */
    agendash: {
        user: "agendash",
        password: "123456",
    },
    /**
     * API configs
     */
    api: {
        prefix: "/api",
    },
    /**
     * Mailgun email credentials
     */
    emails: {
        apiKey: process.env.MAILGUN_API_KEY,
        apiUsername: process.env.MAILGUN_USERNAME,
        domain: process.env.MAILGUN_DOMAIN,
    },
};
//# sourceMappingURL=index.js.map