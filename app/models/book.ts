"use strict";
import { DataTypes, Sequelize } from "sequelize";
import User from "./user";

import db from ".";
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
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
  },
};

function bookModelFactory(sequelize: Sequelize) {
  return sequelize.define("Book", attributes, modelOPtions);
}

const Book = bookModelFactory(db);
export default Book;
