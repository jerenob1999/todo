import { SequelizeOptions, Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
import { Task } from "../models/task.model";
import { User } from "../models/user.model";

dotenv.config({
  path:
    process.env.NODE_ENV !== undefined
      ? `.${process.env.NODE_ENV.trim()}.env`
      : ".env",
});

const Config: SequelizeOptions = {
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  models: [Task, User],
  sync: {
    force: true,
  },
  dialect: "postgres",
};

export const AppDataSource = new Sequelize(Config);
