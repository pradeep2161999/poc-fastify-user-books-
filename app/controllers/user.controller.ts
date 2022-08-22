import { FastifyReply, FastifyRequest } from "fastify";
import {
  add,
  listuser,
  updateuser,
  remove,
  signin,
} from "../services/user.service";
import { UserAttributes } from "../types";
const dotenv = require("dotenv");
import { BookAttributes } from "../types";
// import { remove } from "./book.controller";
function login(req: FastifyRequest, reply: FastifyReply) {
  const attrs = req.body as UserAttributes;
  console.log("==================================>>>>>>>>>>>>>>", attrs);
  return signin(attrs)
    .then((token) => {
      //console.log("----------------------------",signin)
      reply.header("Authorization", `Bearer ${token}`);

      reply.status(200).send({ msg: ["Login Successfully!!!!!"] });
    })
    .catch((err: Error) => {
      console.log("ninifriiri======>", err);
      reply.status(400).send(err);
    });
}
function create(req: FastifyRequest, reply: FastifyReply) {
  const attrs = req.body as UserAttributes;
  const { id } = req.params as { id: number };
  return add(attrs)
    .then((user) => {
      reply.status(200).send(user);
    })
    .catch((err: Error) => {
      reply.status(400).send(err);
    });
}
function list(req: FastifyRequest, reply: FastifyReply) {
  return listuser()
    .then((user) => {
      reply.status(200).send(user);
    })
    .catch((err: Error) => {
      reply.status(400).send(err);
    });
}
function update(req: FastifyRequest, reply: FastifyReply) {
  return updateuser(req.body, req.params)
    .then(() => {
      reply.status(200).send({ msg: [" update Successfully!!!"]});
    })
    .catch((err: Error) => {
      reply.status(400).send(err);
    });
}
function erase(req: FastifyRequest, reply: FastifyReply) {
  const { id } = req.params as { id: number };
  return remove(req.body, id)
    .then(() => {
      reply.send(200).send({ msg: [" user deleted successfully"]});
    })
    .catch((err: Error) => {
      reply.status(400).send(err);
    });
}
export { login, create, list, update, erase };
