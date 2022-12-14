import { FastifyInstance } from "fastify";

import { IncomingMessage, Server, ServerResponse } from "http";

import { create, list, remove, update } from "../../controllers/book.controller";
import { bookCreateRouterOpts } from "./books-create.router.opts";
import { bookDeleteRouterOpts } from "./books-delete.router.opts";
import { bookListRouterOpts } from "./books-list.router.opts";
import { bookUpdateRouterOpts } from "./books-update.router.opts";
const userAuthenticate = require ("../../hooks/users-auth.hooks")
function bookRoutes(
  fastify: FastifyInstance<Server, IncomingMessage, ServerResponse>,
  opts: { prefix: string },
  next: (err?: Error) => void
) {
  userAuthenticate(fastify);

  fastify.post("/book/:userId", bookCreateRouterOpts, create);
  fastify.get("/books", bookListRouterOpts, list);
  fastify.put("/book/:userId/:bookId", bookUpdateRouterOpts, update);
  fastify.delete("/book/:userId/:bookId",bookDeleteRouterOpts, remove);
  next();
}
export default bookRoutes;