import { BuildOptions, Model } from "sequelize";
import { UserInstance } from "./users";

export interface BookAttributes {
  book_name: string;
  book_author: string;
  description: string;

}
// export interface BookCreateAttributes {
//   book_name: string;
//   book_author: string;
//   description: string;
// }


export interface BookInstance extends Model<BookAttributes>, BookAttributes {
  users?: UserInstance[];
  isAdmin(): boolean;
  name(): string;
  isAgent(): boolean;
}

export type BookStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): BookInstance;
};