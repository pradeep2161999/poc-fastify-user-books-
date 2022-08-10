import Book from "../models/book";
import Users from "../models/user";
import id from "../models/book";

function add(req: any) {
  return Book.create({
    book_name: req.body.book_name,
    book_author: req.body.book_author,
    description: req.body.description,
    userId: req.params.userId
  });
}
function listBook(){
  return Book.findAll()
}

function updateBook(attrs: any, params: any) {
  return Book.update(attrs, {
    where: {
      id: params.userId,
    },
  });
}
function removeUser(attrs: any, params: any) {
  return Book.destroy({
    where: {
      id: params.bookId,
     },
  });
}

export { add, listBook, updateBook,removeUser };
