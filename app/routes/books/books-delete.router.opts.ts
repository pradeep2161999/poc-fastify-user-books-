export const bookDeleteRouterOpts = {
    schema: {
      params: {
        type: "object",
        required: ['userId'],
        properties: {
          id: { type: "number" },
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