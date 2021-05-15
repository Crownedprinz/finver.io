export const GetBanks = {
  tags: ["Banks"],
  description: "Return a list of registered financial institution",
  operationId: "getBanks",
  security: [
    {
      bearerAuth: [],
    },
  ],
  parameters: [
    {
      name: "page",
      in: "query",
      schema: {
        type: "integer",
        default: 1,
      },
      required: false,
    },
    {
      name: "limit",
      in: "query",
      schema: {
        type: "integer",
        default: 10,
      },
      required: false,
    },
  ],
  responses: {
    "200": {
      description: "A list of banks.",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              banks: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    name: {
                      type: "string",
                      description: "Bank Name",
                    },
                    active: {
                      type: "boolean",
                      description: "Status of Bank",
                    },
                    color: {
                      properties: {
                        primary: {
                          type: "string",
                          description: "Primary Color",
                        },
                        accent: {
                          type: "string",
                          description: "Accent Color",
                        },
                        secondary: {
                          type: "string",
                          description: "Secondary Color",
                        },
                      },
                    },
                    logo: {
                      type: "string",
                      description: "Bank Logo",
                    },
                    icon: {
                      type: "string",
                      description: "Bank Icon",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

export const OnboardBank = {
  tags: ["Banks"],
  description: "Onboard a financial institution",
  operationId: "onboardBank",
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
            name: {
              type: "string",
              description: "Financial Institution Name",
            },
            sortCode: {
              type: "string",
              description: "Financial Institution Sort Code",
            },
            color: {
              properties: {
                primary: {
                  type: "string",
                  description: "Primary Color",
                },
                secondary: {
                  type: "string",
                  description: "Secondary Color",
                },
                accent: {
                  type: "string",
                  description: "Accent Color",
                },
              },
            },
            logo: {
              type: "string",
              description: "Financial Institution Logo",
            },
            icon: {
              type: "string",
              description: "Financial Institution Icon",
            },
          },
        },
      },
    },
    required: true,
  },
  responses: {
    "200": {
      description: "Onboard a Financial Institution.",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              banks: {
                properties: {
                  _id: {
                    type: "string",
                    description: "BankId",
                  },
                  name: {
                    type: "string",
                    description: "Bank Name",
                  },
                  sortCode: {
                    type: "string",
                    description: "Bank Name",
                  },
                  active: {
                    type: "boolean",
                    description: "Status of Bank",
                  },
                  color: {
                    properties: {
                      primary: {
                        type: "string",
                        description: "Primary Color",
                      },
                      accent: {
                        type: "string",
                        description: "Accent Color",
                      },
                      secondary: {
                        type: "string",
                        description: "Secondary Color",
                      },
                    },
                  },
                  logo: {
                    type: "string",
                    description: "Bank Logo",
                  },
                  icon: {
                    type: "string",
                    description: "Bank Icon",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};
