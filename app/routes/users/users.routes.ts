import { FastifyInstance } from "fastify";
import { IncomingMessage, Server, ServerResponse } from "http";
import { create, list, update, remove } from "../../controllers/user.controller";

function userRoutes(
  fastify: FastifyInstance<Server, IncomingMessage, ServerResponse>,
  opts: { prefix: string },
  next: (err?: Error) => void
) {
  fastify.post("/user", create);
  fastify.get("/user", list);
  fastify.put("/user/:id", update);
  fastify.delete("/user/:id", remove);


  next();
}
export default userRoutes;