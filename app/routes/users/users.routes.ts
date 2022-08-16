// import { create } from "domain";
import { FastifyInstance } from "fastify";
import { IncomingMessage, Server, ServerResponse } from "http";
import { list, update, remove, create } from "../../controllers/user.controller";
import { userCreateRouterOpts } from ".//users-create.router.opts"; 
import { userDeleteRouterOpts } from "./users-delete.router.opts";
import { userListRouterOpts } from "./users-list.router.opts";
import { userLoginRouterOpts } from "./users-login-router.opts";
import { userUpdateRouterOpts } from "./users-update.router.opts";
import { login } from "../../controllers/user.controller"

function userRoutes(
  fastify: FastifyInstance<Server, IncomingMessage, ServerResponse>,
  opts: { prefix: string },
  next: (err?: Error) => void
) {
  fastify.post("/user",userCreateRouterOpts, create);
  fastify.post("/v1/login",userLoginRouterOpts, login);
  fastify.get("/user",userListRouterOpts, list);
  fastify.put("/user/:id",userUpdateRouterOpts, update);
  fastify.delete("/user/:id",userDeleteRouterOpts, remove);


  next();
}
export default userRoutes;