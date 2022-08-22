import { BuildOptions, Model } from "sequelize";
export interface UserAttributes {
  name: string;
  email: string;
  role: string;
  password: string;
  token: string;
  createdAt: number;
  updatedAt: number;
}

export interface UserCreateAttributes {
  name: string;
  email: string;
  role: string;
  password: string;
}
export interface UserInstance
  extends Model<UserAttributes, UserCreateAttributes>,
    UserAttributes {}
export type UserStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): UserInstance;
};
