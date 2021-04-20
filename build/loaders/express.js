"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var api_1 = __importDefault(require("../api"));
var config_1 = __importDefault(require("../config"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var swagger_1 = require("./swagger");
exports.default = (function (_a) {
    var app = _a.app;
    /**
     * Health Check endpoints
     * @TODO Explain why they are here
     */
    app.get("/status", function (req, res) {
        res.status(200).end();
    });
    app.head("/status", function (req, res) {
        res.status(200).end();
    });
    // Useful if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
    // It shows the real origin IP in the heroku or Cloudwatch logs
    app.enable("trust proxy");
    // The magic package that prevents frontend developers going nuts
    // Alternate description:
    // Enable Cross Origin Resource Sharing to all origins by default
    app.use(cors_1.default());
    // Some sauce that always add since 2014
    // "Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it."
    // Maybe not needed anymore ?
    app.use(require("method-override")());
    // Middleware that transforms the raw string of req.body into json
    app.use(body_parser_1.default.json());
    //Load Swagger
    app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.swaggerDocument));
    // Load API routes
    app.use(config_1.default.api.prefix, api_1.default());
    /// catch 404 and forward to error handler
    app.use(function (req, res, next) {
        var err = new Error("Not Found");
        err["status"] = 404;
        next(err);
    });
    /// error handlers
    app.use(function (err, req, res, next) {
        /**
         * Handle 401 thrown by express-jwt library
         */
        if (err.name === "UnauthorizedError") {
            return res.status(err.status).send({ message: err.message }).end();
        }
        return next(err);
    });
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            errors: {
                message: err.message,
            },
        });
    });
});
//# sourceMappingURL=express.js.map