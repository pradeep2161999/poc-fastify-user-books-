import { FastifyReply, FastifyRequest } from "fastify";
// import { updateLanguageServiceSourceFile } from "typescript";
// import User from "../models/user";
import { add, listUser, updateUser ,removeUser } from "../services/user.service";

function create(req: FastifyRequest, reply: FastifyReply) {
  return add(req.body)
    .then((user: any) => {
      reply.status(200).send(user);
    })
    .catch((err: Error) => {
      reply.status(400).send(err);
    });
}

function list(req: FastifyRequest, reply: FastifyReply) {
  return listUser()
    .then((user: any) => {
        // console.log("-----------",user);
      reply.status(200).send(user);
    })
    .catch((err: Error) => {
        // console.log("========",err)
      reply.status(400).send(err);
    });
}
function update(req: FastifyRequest,reply: FastifyReply){
    return updateUser(req.body,req.params)
    .then((user:any) => {
        console.log("user=-------->",user);
        reply.status(200).send(user);
    }).catch((err: Error) => {
        reply.status(400).send(err);
        
    });
}
function remove(req: FastifyRequest,reply: FastifyReply ){
    return removeUser(req.body,req.params)
    .then(() => {
        reply.status(200).send({msg:["deleted sucessfully"]});
    }).catch((err: Error) => {
        reply.status(400).send(err);
    });
}

export { create, list, update, remove};