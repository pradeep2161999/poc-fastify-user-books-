import { FastifyReply, FastifyRequest } from "fastify";
// import { add, listBook, updateBook, removeUser } from "../services/book.service";
import { BookAttributes } from "../types";
import { UserParams } from "../types/user-controllers"
import { BookParams } from "../types/book-controllers";
import { add ,list1, updateBook , removeBook } from "../services/book.service";
function create(req: FastifyRequest, reply: FastifyReply) {
  const attrs = req.body as BookAttributes;
  const { userId } = req.params as { userId: number };
  return add(attrs, userId)
    .then((book) => {
      reply.status(200).send({msg:["book create successfully.."]});
    })
    .catch((err: Error) => {
      reply.status(400).send(err);
    });
  }
  function list(req: FastifyRequest, reply: FastifyReply) {
    return list1()
      .then((book) => {
          // console.log("-----------",book);
        reply.status(200).send(book);
      })
      .catch((err) => {
          // console.log("========",err)
        reply.status(400).send(err);
      });
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
  

//   function remove(req: FastifyRequest,reply: FastifyReply){

//     const attrs = req.body as BookAttributes;
//     const { userId } = req.params as { userId: number };
//     const {bookId} = req.params as { bookId: number};
//     return removeBook(attrs)
//     .then(() => {
//         reply.status(200).send({msg:["book deleted sucessfully"]});
//     }).catch((err: Error) => {
//       console.log("=====================================",err);
//         reply.status(400).send(err);
//     });
// }

// export { create, list, update,remove };
export { create, list, update, remove };