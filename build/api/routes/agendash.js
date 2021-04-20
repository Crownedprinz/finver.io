"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_basic_auth_1 = __importDefault(require("express-basic-auth"));
var agendash_1 = __importDefault(require("agendash"));
var typedi_1 = require("typedi");
var config_1 = __importDefault(require("../../config"));
exports.default = (function (app) {
    var _a;
    var agendaInstance = typedi_1.Container.get("agendaInstance");
    app.use("/dash", express_basic_auth_1.default({
        users: (_a = {},
            _a[config_1.default.agendash.user] = config_1.default.agendash.password,
            _a),
        challenge: true,
    }), agendash_1.default(agendaInstance));
});
//# sourceMappingURL=agendash.js.map