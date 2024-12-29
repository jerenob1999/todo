import { Table, Column, Model, HasMany } from "sequelize-typescript";
import { Task } from "./task.model";

@Table
export class User extends Model {
  @Column
  email!: string;

  @Column
  password!: string;

  @HasMany(() => Task)
  tasks!: Task[];
}
