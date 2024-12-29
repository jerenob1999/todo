import { Table, Column, Model, HasMany, DataType } from "sequelize-typescript";
import { CreationOptional } from "sequelize";
import { Task } from "./task.model";

@Table({
  tableName: "user",
  name: { singular: "user" },
})
export class User extends Model {
  @Column({
    primaryKey: true,
    type: DataType.STRING,
    defaultValue: DataType.UUIDV4,
  })
  declare id: string;

  @Column
  declare email: string;

  @Column
  declare password: string;

  @HasMany(() => Task)
  declare tasks: Task[];

  declare createdAt: CreationOptional<Date>;

  declare updatedAt: CreationOptional<Date>;
}
