import { BuildOptions, Model } from "sequelize";
import { UserInstance } from "./users";

export interface BookAttributes {
  id: number;
  book_name: string;
  book_author: string;
  description: string;

}


export interface BookInstance extends Model<BookAttributes>, BookAttributes {
  users?: UserInstance[];
  isAdmin(): boolean;
  name(): string;
  isAgent(): boolean;
}

export type BookStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): BookInstance;
};