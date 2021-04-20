"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var middlewares_1 = __importDefault(require("../middlewares"));
var route = express_1.Router();
exports.default = (function (app) {
    app.use("/users", route);
    route.get("/me", middlewares_1.default.isAuth, middlewares_1.default.attachCurrentUser, function (req, res) {
        return res.json({ user: req.currentUser }).status(200);
    });
});
//# sourceMappingURL=user.js.map