import { Components } from './components';
export const SignUp = {
  tags: ["Auth"],
  description: "Grant Access to loan providers",
  operationId: "signup",
  security: [
    {
      bearerAuth: [],
    },
  ],
  parameters: [
    {
      name: "signup",
      in: "body",
      required: true,
      schema: {
        required: ["firstName", "lastName", "companyName", "email", "password"],
        type: "object",
        properties: {
          firstName: {
            type: "string",
            description: "User First Name",
          },
          lastName: {
            type: "string",
            description: "User Surname",
          },
          companyName: {
            type: "string",
            description: "Registered Company Name",
          },
          email: {
            type: "string",
            description: "Registered Company Email",
          },
          password: {
            type: "string",
            description: "Strong Password Recommended",
          },
        },
      },
    },
  ],
  responses: {
    "200": {
      description: "User Sign Up",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              user: {
                properties: {
                  firstName: {
                    type: "string",
                  },
                  lastName: {
                    type: "string",
                  },
                  companyName: {
                    type: "string",
                  },
                  _id: {
                    type: "string",
                  },
                  isApproved: {
                    type: "boolean",
                  },
                  role: {
                    type: "string",
                  },
                  createdAt: {
                    type: "string",
                    format: "date-time",
                  },
                  updatedAt: {
                    type: "string",
                    format: "date-time",
                  },
                },
              },
              token: {
                type: "string",
              },
            },
          },
        },
      },
    },
  },
};

export const SignIn = {
  tags: ["Auth"],
  description: "Grant Access to loan providers",
  operationId: "signin",
  security: [
    {
      bearerAuth: [],
    },
  ],
  parameters: [],
  requestBody: {
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            email: {
              type: "string",
              required: true,
            },
            password: {
              type: "string",
              required: true,
            },
          },
        },
      },
    },
    required: true,
  },
  responses: {
    "200": {
      description: "User Sign Up",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              user: {
                properties: {
                  firstName: {
                    type: "string",
                  },
                  lastName: {
                    type: "string",
                  },
                  companyName: {
                    type: "string",
                  },
                  _id: {
                    type: "string",
                  },
                  isApproved: {
                    type: "boolean",
                  },
                  role: {
                    type: "string",
                  },
                  createdAt: {
                    type: "string",
                    format: "date-time",
                  },
                  updatedAt: {
                    type: "string",
                    format: "date-time",
                  },
                },
              },
              token: {
                type: "string",
              },
            },
          },
        },
      },
    },
  },
};


