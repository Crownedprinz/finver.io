export const getUsers = {
  tags: ["Users"],
  description: "Returns all users from the system that the admin has access to",
  operationId: "getUsers",
  security: [
    {
      bearerAuth: [],
    },
  ],
  responses: {
    "200": {
      description: "A list of users.",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              pet_name: {
                type: "string",
                description: "User Name",
              },
              pet_age: {
                type: "string",
                description: "User Age",
              },
            },
          },
        },
      },
    },
  },
};
