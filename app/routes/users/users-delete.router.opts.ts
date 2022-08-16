export const userDeleteRouterOpts = {
    schema: {
      params: {
        type: "object",
        required: ['id'],
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
            msg: {type: "array",items:{ type:"string" }},
          },
        },
      },
    },
  };