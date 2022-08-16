export const userUpdateRouterOpts = {
    schema: {
      body: {
        type: "object",
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