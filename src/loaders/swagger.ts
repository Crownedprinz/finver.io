import { GetBanks, OnboardBank } from "./../docs/openapi/banks.swagger";
import { getUsers} from "../docs/openapi/user.swagger";
import { SignUp,SignIn } from "../docs/openapi/auth.swagger";

export const swaggerDocument = {
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
  consumes: ["application/json"],
  produces: ["application/json"],
  tags: [
    {
      name: "Users",
    },
  ],
  servers: [
    {
      url: "http://localhost:3000/",
      description: "Local server",
    },
    {
      url: "https://finver.herokuapp.com/",
      description: "Testing server",
    },
    {
      url: "https://api.finver.io/",
      description: "Production server",
    },
  ],
  paths: {
    "/api/v1/auth/signup": {
      post: SignUp,
    },
    "/api/v1/auth/signin": {
      post: SignIn,
    },
    "/api/v1/users": {
      get: getUsers,
    },
    "/api/v1/banks": {
      get: GetBanks,
      post: OnboardBank,
    },
  },
};
