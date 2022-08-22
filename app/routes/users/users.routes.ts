import { FastifyInstance } from "fastify";
import { IncomingMessage, Server, ServerResponse } from "http";
import { login} from "../../controllers/user.controller";
import { userLoginRouterOpts } from "./users-login-router.opts";
function userpublicRoutes(
  fastify: FastifyInstance<Server, IncomingMessage, ServerResponse>,
  opts: { prefix: string},
  next: (err?: Error) => void
)
{
  fastify.post("/v1/login",userLoginRouterOpts, login);
  next();
}
export default userpublicRoutes;  