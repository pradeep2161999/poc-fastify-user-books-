import { BuildOptions, Model } from "sequelize";

export interface BookAttributes {
  book_name: string;
  book_author: string;
  description: string;

}
export interface BookCreateAttributes {
  book_name: string;
  book_author: string;
  description: string;
}

export interface BookInstance extends Model<BookAttributes,BookCreateAttributes>, BookAttributes {}

export type BookStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): BookInstance;
};