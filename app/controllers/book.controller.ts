import { FastifyError, FastifyReply, FastifyRequest } from "fastify";
import { BookAttributes } from "../types";
import { UserParams } from "../types/user-controllers"
import { BookParams } from "../types/book-controllers";
import { add ,listAndPaginate, updateBook , removeBook } from "../services/book.service";
function create(req: FastifyRequest, reply: FastifyReply) {
  const attrs = req.body as BookAttributes;
  console.log("//////////////////////////////////////////////////",attrs);
  
  const { userId } = req.params as { userId: number };
  return add(attrs, userId)
    .then((book) => {
      reply.status(200).send({msg:["book create successfully.."]});
    })
    .catch((err: Error) => {
      reply.status(400).send(err);
    });
  }
     // return list1()
    //   .then((book) => {
    //       // console.log("-----------",book);
    //     reply.status(200).send(book);
    //   })
    //   .catch((err) => {
    //       // console.log("========",err)
    //     reply.status(400).send(err);
    //   });
    // }
  function list(req: FastifyRequest, reply: FastifyReply) {
 
    const query = req.query;
    if(/*book.list() */ 1){
      listAndPaginate(query)
      .then((landingPages) => {
        reply.code(200).send(landingPages);
      })
      .catch((error: FastifyError) =>{
        reply.send(error);
      });
    }else{
      reply.code(403).send({ errors: ["permission.denied"]});
    }
  }
  
  function update(req: FastifyRequest, reply: FastifyReply){
 
    const attrs = req.body as BookAttributes;
    const { userId } = req.params as { userId: number };
    console.log("--------->>>>>",userId);
    return updateBook(attrs, userId)
    .then((book) => {
console.log("-------->>>>>>",book);
      reply.status(200).send({msg:["book updated successfully..."]});
    })
    .catch((err) =>{
      console.log("=====================>>>>>>>>>>>",err);
      reply.status(400).send(err);
      
});
  }
  async function remove(req: FastifyRequest, reply: FastifyReply) {
    // console.log("req------------------------------------------------", req.body);
    // console.log("params---------------------------", req.params);
    const { userId, bookId } = req.params as BookParams;
    const user = await removeBook(bookId);
    reply.status(200).send({msg:["book deleted successfully"]})
  }

export {create,list, update, remove  };