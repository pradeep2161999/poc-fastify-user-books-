export const bookCreateRouterOpts = {
    schema: {
      body: {
        type: "object",
        required: ['book_name'],
        properties: {
          book_name: { type: "string" },
          book_author: { type: "string" },
          description: { type: "string" },
        },
      },
      response: {
        200: {
          type: "object",
          properties: {
            id: { type: "number" },
            book_name: { type: "string" },
            book_author: { type: "string" },
            description: { type: "string" },
            userId: { type: "number" },
            msg: {type: "array",items:{ type:"string" }},

          },
        },
      },
    },
  };