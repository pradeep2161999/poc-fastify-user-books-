export const userListRouterOpts = {
    schema: 
    {
       },
      response: {
        200: {
          type: "object",
          properties: {
            id: { type: "number" },
            name: { type: "string" },
            email: { type: "string" },
            role: { type: "string" },
          },
        },
      },
    };
 