import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const env = "development";

const config = require(`${__dirname}/../../db/config.json`)[env];

const db = new Sequelize(process.env[config.use_env_variable] as string, {
  dialect: "postgres",
});

export default db;
