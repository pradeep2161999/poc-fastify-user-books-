import Book from "../models/book";
import Users from "../models/user";
import id from "../models/book";

import user from "../models/user";
import User from "../models/user";
import { BookAttributes } from "../types";
import { UserParams } from "../types/user-controllers";

async function add(attrs:any, userId: number) {
  attrs.userId = userId;
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