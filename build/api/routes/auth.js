"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var typedi_1 = require("typedi");
var auth_1 = __importDefault(require("../../services/auth"));
var middlewares_1 = __importDefault(require("../middlewares"));
var celebrate_1 = require("celebrate");
var route = express_1.Router();
exports.default = (function (app) {
    app.use("/auth", route);
    route.post("/signup", celebrate_1.celebrate({
        body: celebrate_1.Joi.object({
            name: celebrate_1.Joi.string().required(),
            email: celebrate_1.Joi.string().required(),
            password: celebrate_1.Joi.string().required(),
        }),
    }), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
        var logger, authServiceInstance, _a, user, token, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    logger = typedi_1.Container.get("logger");
                    logger.debug("Calling Sign-Up endpoint with body: %o", req.body);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    authServiceInstance = typedi_1.Container.get(auth_1.default);
                    return [4 /*yield*/, authServiceInstance.SignUp(req.body)];
                case 2:
                    _a = _b.sent(), user = _a.user, token = _a.token;
                    return [2 /*return*/, res.status(201).json({ user: user, token: token })];
                case 3:
                    e_1 = _b.sent();
                    logger.error("🔥 error: %o", e_1);
                    return [2 /*return*/, next(e_1)];
                case 4: return [2 /*return*/];
            }
        });
    }); });
    route.post("/signin", celebrate_1.celebrate({
        body: celebrate_1.Joi.object({
            email: celebrate_1.Joi.string().required(),
            password: celebrate_1.Joi.string().required(),
        }),
    }), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
        var logger, _a, email, password, authServiceInstance, _b, user, token, e_2;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    logger = typedi_1.Container.get("logger");
                    logger.debug("Calling Sign-In endpoint with body: %o", req.body);
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 4]);
                    _a = req.body, email = _a.email, password = _a.password;
                    authServiceInstance = typedi_1.Container.get(auth_1.default);
                    return [4 /*yield*/, authServiceInstance.SignIn(email, password)];
                case 2:
                    _b = _c.sent(), user = _b.user, token = _b.token;
                    return [2 /*return*/, res.json({ user: user, token: token }).status(200)];
                case 3:
                    e_2 = _c.sent();
                    logger.error("🔥 error: %o", e_2);
                    return [2 /*return*/, next(e_2)];
                case 4: return [2 /*return*/];
            }
        });
    }); });
    /**
     * @TODO Let's leave this as a place holder for now
     * The reason for a logout route could be deleting a 'push notification token'
     * so the device stops receiving push notifications after logout.
     *
     * Another use case for advance/enterprise apps, you can store a record of the jwt token
     * emitted for the session and add it to a black list.
     * It's really annoying to develop that but if you had to, please use Redis as your data store
     */
    route.post("/logout", middlewares_1.default.isAuth, function (req, res, next) {
        var logger = typedi_1.Container.get("logger");
        logger.debug("Calling Sign-Out endpoint with body: %o", req.body);
        try {
            //@TODO AuthService.Logout(req.user) do some clever stuff
            return res.status(200).end();
        }
        catch (e) {
            logger.error("🔥 error %o", e);
            return next(e);
        }
    });
});
//# sourceMappingURL=auth.js.map