import { BuildOptions,Model } from "sequelize";
export interface UserAttributes{
    // name: string,
    email: string,
    // role: string,   
    // createdAt: number,
    // updatedAt: number,
    password: string,
    //  mark_as_signin: number,
}
export interface UserInstance extends Model<UserAttributes>, UserAttributes {}
export type UserStatic = typeof Model & {
    new (values?: object, options?: BuildOptions):UserInstance;
}