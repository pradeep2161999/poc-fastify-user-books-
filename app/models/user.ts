"use strict";
import { DataTypes, Sequelize } from "sequelize";
import Book from "./book";
import db from ".";
import { UserAttributes } from "../types";

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
   
    type: DataTypes.STRING,
  },
  mark_as_sigin: {
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

function modelUserFactory(sequelize: Sequelize) {
  return sequelize.define("User", attributes);
}

const Users = modelUserFactory(db);
Users.hasMany(Book, {
  foreignKey: "userId",
  as: "book",
});

export default Users;
