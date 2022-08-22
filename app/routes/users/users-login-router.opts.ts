export const userLoginRouterOpts = {
    schema: {
      body: {
        type: "object",
        required: ["email","password"],
        properties: {
          name: { type: "string" },
          email: { type: "string" },
          role: { type: "string" },
          password: { type: "string"},
          token: { type: "string"},
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
module.exports = {
  userLoginRouterOpts
}