import { BuildOptions, Model } from "sequelize";
import { BookInstance } from "./book";
export interface UserAttributes {
  name: string;
  email: string;
  role: string;
  password: string;
  token: string;
  createdAt: number;
  updatedAt: number;
}

// export interface UserCreateAttributes {
//   name: string;
//   email: string;
//   role: string;
//   password: string;
// }
export interface UserInstance
  extends Model<UserAttributes>,
    UserAttributes {
      book?: BookInstance
      isAdmin(): boolean;
      isAgent(): boolean;
    }
export type UserStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): UserInstance;
};
