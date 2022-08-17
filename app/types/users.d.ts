import { BuildOptions,Model } from "sequelize";
export interface UserAttributes{
    name: string,
    email: string,
    role: string, 
    password: string,
   createdAt: number,
    updatedAt: number,
    mark_as_signin: number
}
export interface UserInstance extends Model<UserAttributes>, UserAttributes {}
export type UserStatic = typeof Model & {
    new (values?: object, options?: BuildOptions):UserInstance;
}