export const GetAllTransactions  = {
  tags: ["Transactions"],
  description: "Return a list of transactions",
  operationId: "getTransactions",
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
      description: "A list of transactions.",
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
}

export const AddTransaction = {
  tags: ["Transactions"],
  description: "Integrate Transactions from Scrapper",
  operationId: "addTransactions",
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
            accountName: {
              type: "string",
              description: "Account Name",
            },
            nuban: {
              type: "string",
              description: "Account Number",
            },
            accountCategory: {
              type: "string",
              description: "Account Category",
            },
            accountType: {
              type: "string",
              description: "Type of Account",
            },
            availableBalance: {
              type: "number",
              description: "Available Balance",
            },
            bookingBalance: {
              type: "number",
              description: "Available Balance",
            },
            totalCredit: {
              type: "number",
              description: "Total Inflow",
            },
            totalDebit: {
              type: "number",
              description: "Total Outflow",
            },
            currency: {
              type: "string",
              description: "Currency",
            },
            address: {
              type: "string",
              description: "Address",
            },
            bank: {
              type: "string",
              description: "Bank Id",
            },
            signatories: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    description: "First Name",
                  },
                  bvn: {
                    type: "string",
                    description: "Last Name",
                  },
                },
              },
            },
            details: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  transactionDate: {
                    type: "string",
                    description: "Transaction Date",
                    format: "date-time",
                  },
                  valueDate: {
                    type: "string",
                    description: "Value Date",
                    format: "date-time",
                  },
                  narration: {
                    type: "string",
                    description: "Narration",
                  },
                  credit: {
                    type: "number",
                    description: "Credit",
                  },
                  debit: {
                    type: "number",
                    description: "Debit",
                  },
                  balance: {
                    type: "number",
                    description: "Balance",
                  },
                  branch: {
                    type: "string",
                    description: "Branch",
                  },
                },
              },
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