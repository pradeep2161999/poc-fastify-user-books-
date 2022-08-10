import { FastifyReply, FastifyRequest } from "fastify";
import { add, listBook, updateBook, removeUser } from "../services/book.service";

function create(req: FastifyRequest, reply: FastifyReply) {
  return add(req)
    .then((book: any) => {
      reply.status(200).send(book);
    })
    .catch((err: Error) => {
      reply.status(400).send(err);
    });
  }
  function list(req: FastifyRequest, reply: FastifyReply) {
    return listBook()
      .then((book: any) => {
          // console.log("-----------",user);
        reply.status(200).send(book);
      })
      .catch((err: Error) => {
          // console.log("========",err)
        reply.status(400).send(err);
      });
    }
  function update(req: FastifyRequest, reply: FastifyReply){
    console.log("--------->>>>>",req.params);
    
    return updateBook(req.body, req.params)
    .then((book:any) => {
console.log("-------->>>>>>",book);
      reply.status(200).send(book);
    })
    .catch((err: Error) =>{
      console.log("=====================>>>>>>>>>>>",err);
      reply.status(400).send(err);
      
});
  }
  function remove(req: FastifyRequest,reply: FastifyReply){
    return removeUser(req.body,req.params)
    .then(() => {
        reply.status(200).send({msg:["deleted sucessfully"]});
    }).catch((err: Error) => {
      console.log("=====================================",err);
        reply.status(400).send(err);
    });
}

export { create, list, update,remove };