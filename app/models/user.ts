"use strict";
import { DataTypes, Sequelize } from "sequelize";
import Book from "./book";
import db from ".";

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