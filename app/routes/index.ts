import { FastifyInstance } from "fastify";
import { IncomingMessage, Server, ServerResponse } from "http";
import bookRoutes from "./books/books.routes";
import userRoutes from "./users/users.routes";
// const userRoutes = require('./users/users.routes')
import userprivateRoutes from "./users/users.private.routes";
import userpublicRoutes from "./users/users.routes";

function routes(
  fastify: FastifyInstance<Server, IncomingMessage, ServerResponse>,
  opts: { prefix: string },
  next: (err?: Error) => void
) {
  fastify.register(userpublicRoutes);
  fastify.register(userprivateRoutes);
  fastify.register(bookRoutes);
  next();
}
export default routes;