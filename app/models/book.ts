"use strict";
import { DataTypes, Sequelize } from "sequelize";
import User from "./user";
import { BookStatic } from "../types";
import db from ".";
import Users from "./user";
const modelOPtions = {
  tableName: "Books",
};
const attributes = {
  book_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  book_author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId:{
    type: DataTypes.INTEGER,
    onDelete: "CASCADE",
    references:{
      model: "Users",
      key: "id",
    },
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

function bookModelFactory(sequelize: Sequelize): BookStatic {
  return sequelize.define("Book", attributes, modelOPtions) as BookStatic;
}

const Book = bookModelFactory(db);
Book.belongsTo(Users,{
  foreignKey: "userId",
  as: "users",
});
export default Book;
