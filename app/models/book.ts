"use strict";
import { DataTypes, Sequelize } from "sequelize";
import db from ".";

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
  return sequelize.define("Book", attributes);
}

const Book = bookModelFactory(db);
export default Book;
