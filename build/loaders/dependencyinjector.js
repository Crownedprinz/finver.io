"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typedi_1 = require("typedi");
var form_data_1 = __importDefault(require("form-data"));
var mailgun_js_1 = __importDefault(require("mailgun.js"));
var logger_1 = __importDefault(require("./logger"));
var agenda_1 = __importDefault(require("./agenda"));
var config_1 = __importDefault(require("../config"));
exports.default = (function (_a) {
    var mongoConnection = _a.mongoConnection, models = _a.models;
    try {
        models.forEach(function (m) {
            typedi_1.Container.set(m.name, m.model);
        });
        var agendaInstance = agenda_1.default({ mongoConnection: mongoConnection });
        var mgInstance = new mailgun_js_1.default(form_data_1.default);
        typedi_1.Container.set("agendaInstance", agendaInstance);
        typedi_1.Container.set("logger", logger_1.default);
        typedi_1.Container.set("emailClient", mgInstance.client({
            key: config_1.default.emails.apiKey,
            username: config_1.default.emails.apiUsername,
        }));
        typedi_1.Container.set("emailDomain", config_1.default.emails.domain);
        logger_1.default.info("✌️ Agenda injected into container");
        return { agenda: agendaInstance };
    }
    catch (e) {
        logger_1.default.error("🔥 Error on dependency injector loader: %o", e);
        throw e;
    }
});
//# sourceMappingURL=dependencyinjector.js.map