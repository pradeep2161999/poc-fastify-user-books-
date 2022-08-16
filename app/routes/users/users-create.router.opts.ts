export const userCreateRouterOpts = {
    schema: {
      body: {
        type: "object",
        required: ['name'],
        properties: {
          name: { type: "string" },
          email: { type: "string" },
          role: { type: "string" },
        },
      },
      response: {
        200: {
          type: "object",
          properties: {
            id: { type: "number" },
            name: { type: "string" },
            email: { type: "string" },
            role: { type: "string" },
            msg: {type: "array",items:{ type:"string" }},
          },
        },
      },
    },
  };