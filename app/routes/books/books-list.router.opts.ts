export const bookListRouterOpts = {
    schema: 
    {
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
          },
        },
      },
    };
