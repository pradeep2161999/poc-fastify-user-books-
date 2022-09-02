import { Sequelize } from "sequelize/types";
import { Op } from "sequelize";
import { BookListQueryParamas } from "../types/book-controllers";
const columnSearchQuery = (query: BookListQueryParamas) => {
  const { book_name: bookName } = query;
  const { book_author: bookAuthor } = query;
  const { description: bookdescription } = query;
  const searchQueries: any = [];
  if (bookName) {
    const bookQuery = {
      book_name: { [Op.iLike]: `%${bookName}%` },
    };
    searchQueries.push(bookQuery);
  }
  if (bookAuthor){
    const bookAuthName ={
        book_author:{ [Op.iLike]: `%${bookAuthor}`},
    };
    searchQueries.push(bookAuthName);
  }
  if(bookdescription){
    const bookdesc = {
        description: { [Op.iLike]: `%${bookdescription}`},
    };
    searchQueries.push(bookdesc)

  }
  const result = {
    [Op.and]: [searchQueries],
  };
  return result;
};
export default columnSearchQuery;
