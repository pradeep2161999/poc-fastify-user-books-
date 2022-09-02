import Book from "../models/book";
import Users from "../models/user";
import id from "../models/book";
import { size, map } from "lodash";
import user from "../models/user";
import User from "../models/user";
import { BookAttributes } from "../types";
import { UserParams } from "../types/user-controllers";
import { globalSearchQuery } from "../queries";
import { paginate, paginatorResult } from "../lib/paginator-result";
import { Q_MINIMUM_SIZE } from "../config/constants";
import columnSearchQuery from "../queries/book-column-search.query";
async function add(attrs: any, userId: number) {
  attrs.userId = userId;
  return Book.create(attrs);
}
// async function list1(){
//   return Book.findAll();
// }
async function listAndPaginate(query: any) {
  const page = query.page && query.page > 0 ? query.page : 1;
  const perPage = query.per_page && query.per_page > 0 ? query.per_page : 10;
  const offset = (page - 1) * perPage;
  const limit = perPage;
  const queries =
    size(query.q) >= Q_MINIMUM_SIZE ? globalSearchQuery(query.q) : {};
  const columnQuery = columnSearchQuery(query);
  const listOfBooks = await Book.findAndCountAll({
    limit,
    offset,
    where: {
      ...queries,
      ...columnQuery,
    },
    include: [
      {
        model: User,
        as: "users",
      },
    ],
    order: [["id", "ASC"]],
  });
  const books = map(listOfBooks.rows, (row: any) => {
    const data = {
      id: row.id,
      bookname: row.book_name,
      bookauthor: row.book_author,
      bookdescription: row.description,
      userName: row.users.name,
    };
    return data;
  });
  const result = paginate(
    { rows: books, count: listOfBooks.count },
    perPage,
    page
  );
  return paginatorResult(result, "books");
}
async function updateBook(attrs: BookAttributes, id: number) {
  //   const data = Book.update(attrs, {
  //     where: {
  //       id: id,
  //     },
  //   });
}

async function removeBook(id: number) {
  //   return Book.destroy({
  //     where: {
  //       id: id,
  //     },
  //   });
}

export { add, listAndPaginate, updateBook, removeBook };
