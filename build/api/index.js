"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_1 = __importDefault(require("./routes/auth"));
var user_1 = __importDefault(require("./routes/user"));
var agendash_1 = __importDefault(require("./routes/agendash"));
// guaranteed to get dependencies
exports.default = (function () {
    var app = express_1.Router();
    auth_1.default(app);
    user_1.default(app);
    agendash_1.default(app);
    return app;
});
//# sourceMappingURL=index.js.map