export const GetAllCustomers = {
  tags: ["Customers"],
  description: "Return a list of customers",
  operationId: "getCustomers",
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
      description: "A list of customers.",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              customers: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    firstName: {
                      type: "string",
                      description: "First Name",
                    },
                    lastName: {
                      type: "string",
                      description: "Last Name",
                    },
                    email: {
                      type: "array",
                      items: {},
                    },
                    phone: {
                      type: "array",
                      items: {},
                    },
                    blocked: {
                      type: "boolean",
                      description: "Active Status of Customer",
                    },
                    noLinkedAccounts: {
                      type: "integer",
                      description: "Numbers of Linked accounts on Finver",
                    },
                    linkedAccounts: {
                      properties: {
                        accountName: {
                          type: "string",
                        },
                        connected: {
                          type: "boolean",
                        },
                        nuban: {
                          type: "string",
                        },
                        bank: {
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

export const CreateCustomer = {
  tags: ["Customers"],
  description: "Onboard SandBox Customers",
  operationId: "createCustomer",
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
            firstName: {
              type: "string",
              description: "First Name",
            },
            lastName: {
              type: "string",
              description: "Last Name",
            },
            username: {
              type: "string",
              description: "Username",
            },
            password: {
              type: "string",
              description: "Password",
            },
            accountCategory: {
              type: "string",
              description: "Type of Account",
            },
          },
        },
      },
    },
    required: true,
  },
  responses: {
    "200": {
      description: "Create a Sandbox Customer.",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              banks: {
                properties: {
                  firstName: {
                    type: "string",
                    description: "First Name",
                  },
                  lastName: {
                    type: "string",
                    description: "Last Name",
                  },
                  username: {
                    type: "string",
                    description: "Username",
                  },
                  accountCategory: {
                    type: "string",
                    description: "Type of Account",
                  },
                  email: {
                    type: "array",
                    items: {},
                  },
                  phone: {
                    type: "array",
                    items: {},
                  },
                  blocked: {
                    type: "boolean",
                    description: "Bank Icon",
                  },
                  noLinkedAccounts: {
                    type: "integer",
                    description: "Bank Icon",
                  },
                  linkedAccounts: {
                    properties: {
                      accountName: {
                        type: "string",
                      },
                      connected: {
                        type: "boolean",
                      },
                      nuban: {
                        type: "string",
                      },
                      bank: {
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
                },
              },
            },
          },
        },
      },
    },
  },
};
