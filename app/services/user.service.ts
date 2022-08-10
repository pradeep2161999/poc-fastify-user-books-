import { FastifyRequest } from "fastify";
import db from "../models";
import Book from "../models/book";
import User from "../models/user";

function add(req: any) {
  return User.create({
    name: req.name,
    email: req.email,
    role: req.role,
  });
}

function listUser() {
  return User.findAll({
    include: [
      {
        model: Book,
        as: "book",
      },
    ],
  });
}
function updateUser(attrs: any, params: any) {
  return User.update(attrs, {
    where: {
      id: params.id,
    },
  });
}
function removeUser(attrs: any, params: any) {
  return User.destroy({
    where: {
      id: params.id,
    },
  });
}

export { add, listUser, updateUser, removeUser };
