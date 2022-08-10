import { FastifyInstance } from "fastify";
import { IncomingMessage, Server, ServerResponse } from "http";
import { create, list, update, remove } from "../../controllers/book.controller";

function bookRoutes(
  fastify: FastifyInstance<Server, IncomingMessage, ServerResponse>,
  opts: { prefix: string },
  next: (err? : Error) => void
) {
  fastify.post("/user/:userId/items", create);
  fastify.get("/user/book", list);
  fastify.put("/user/:userId/items/:bookId", update);
  fastify.delete("/user/:userId/items/:bookId", remove);

  next();
}
export default bookRoutes;