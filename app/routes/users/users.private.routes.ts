import { FastifyInstance } from "fastify";

import { userCreateRouterOpts } from "./users-create.router.opts";
import { userDeleteRouterOpts } from "./users-delete.router.opts";
import { userListRouterOpts } from "./users-list.router.opts";
import { userUpdateRouterOpts } from "./users-update.router.opts";
import { create,list, update,erase } from "../../controllers/user.controller";
import { IncomingMessage, Server, ServerResponse } from "http";
import { UserInstance } from "../../types";
const userAuthenticate = require("../../hooks/users-auth.hooks")
declare module 'fastify' {
  interface FastifyRequest {
    currentUser: UserInstance;
  }
}
function userprivateRoutes(
    fastify: FastifyInstance<Server, IncomingMessage, ServerResponse>,
    opts: { prefix: string},
    next: (err?: Error) => void
  )

{
  userAuthenticate(fastify);

    fastify.post("/user/:id",userCreateRouterOpts, create);
    fastify.get("/user",userListRouterOpts, list);
    fastify.put("/user/:id",userUpdateRouterOpts, update);
    fastify.delete("/user/:id",userDeleteRouterOpts, erase);
    next()
}
export default userprivateRoutes;