import Book from "../models/book";
import Users from "../models/user";
import id from "../models/book";

import user from "../models/user";
import User from "../models/user";
import { BookAttributes } from "../types";
import { UserParams } from "../types/user-controllers";

async function add(attrs:any, userId: number) {
  attrs.userId = userId;
  // console.log(attrs)
  return Book.create(attrs);
}
async function list1(){
  return Book.findAll();
}
async function updateBook(attrs: BookAttributes, id: number) {
  const data = Book.update(attrs, {
    where: {
      id: id,
    },
  });
}

async function removeBook(id: number) {
  return Book.destroy({
    where: {
      id: id,
    },
  });
}


export { add, list1, updateBook, removeBook};
// function add(req: any) {
//   return Book.create({
//     book_name: req.body.book_name,
//     book_author: req.body.book_author,
//     description: req.body.description,
//     userId: req.params.userId
//   });
// }
// function listBook(){
//   return Book.findAll()
// }

// function updateBook(attrs: any, params: any) {
//   return Book.update(attrs, {
//     where: {
//       id: params.userId,
//     },
//   });
// }
// function removeUser(attrs: any, params: any) {
//   return Book.destroy({
//     where: {
//       id: params.bookId,
//      },
//   });
// }

// export { add, listBook, updateBook,removeUser };
