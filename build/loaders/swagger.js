"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerDocument = void 0;
var user_swagger_1 = require("../docs/openapi/user.swagger");
exports.swaggerDocument = {
    openapi: "3.0.1",
    info: {
        version: "1.0.0",
        title: "Finver Doc",
        description: "Granting Access to Financial Services in Africa",
        termsOfService: "",
        contact: {
            name: "John Ademola",
            email: "ademolajhon@gmail.com",
            url: "https://jademola.web.app",
        },
        license: {
            name: "Apache 2.0",
            url: "https://www.apache.org/licenses/LICENSE-2.0.html",
        },
        servers: [
            {
                url: "http://localhost:3000/api/v1",
                description: "Local server",
            },
        ],
        components: {
            schemas: {},
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
    },
    host: "localhost:3000",
    basePath: "/api/v1",
    tags: [
        {
            name: "Users",
        },
    ],
    paths: {
        "/api/v1/users": {
            get: user_swagger_1.getUsers,
        },
    },
};
//# sourceMappingURL=swagger.js.map