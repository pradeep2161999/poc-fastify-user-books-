"use strict";
import { DataTypes, Sequelize } from "sequelize";
import Book from "./book";
import db from ".";
import { UserAttributes } from "../types";
import { USER_ROLE } from "../config/constants";
import { UserStatic } from "../types";
const modelOPtions = {
  tableName: "Users",
};

 const attributes = {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    allowNull:false,
    type: DataTypes.STRING,
  },
  mark_as_signin: {
    type: DataTypes.STRING,
  },
  token: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
  },
 
};

function modelUserFactory(sequelize: Sequelize): UserStatic {
  return sequelize.define("User", attributes, modelOPtions) as UserStatic;
}

const Users = modelUserFactory(db);
Users.prototype.isAdmin = function (): boolean {
  return this.role === USER_ROLE.admin;
};
Users.prototype.isAgent = function (): boolean {
  return this.role === USER_ROLE.agent;
};


// Users.hasMany(Book, {
//   foreignKey: "userId",
//   as: "book",
// });


export default Users;
