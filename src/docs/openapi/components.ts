import { Gender } from "../../api/constants/enums";

export const Components = {
  /* ... */
  components: {
    schemas: {
      identificationNumber: {
        type: "integer",
        description: "User identification number",
        example: 1234,
      },
      username: {
        type: "string",
        example: "raparicio",
      },
      Gender: {
        type: "string",
        enum: Gender,
        default: 0,
      },
      companyId: {
        type: "integer",
        description: "Company id where the user works",
        example: 15,
      },
      User: {
        type: "object",
        properties: {
          identificationNumber: {
            $ref: "#/components/schemas/identificationNumber",
          },
          username: {
            $ref: "#/components/schemas/username",
          },
          userType: {
            $ref: "#/components/schemas/userType",
          },
          companyId: {
            $ref: "#/components/schemas/companyId",
          },
        },
      },
      Users: {
        type: "object",
        properties: {
          users: {
            type: "array",
            items: {
              $ref: "#/components/schemas/User",
            },
          },
        },
      },
      Error: {
        type: "object",
        properties: {
          message: {
            type: "string",
          },
          internal_code: {
            type: "string",
          },
        },
      },
    },
  },
};