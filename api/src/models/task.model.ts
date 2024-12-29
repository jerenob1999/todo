import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  DataType,
} from "sequelize-typescript";
import { CreationOptional } from "sequelize";
import { User } from "./user.model";

@Table({
  tableName: "task",
  name: { singular: "task" },
})
export class Task extends Model {
  @Column({
    primaryKey: true,
    type: DataType.STRING,
    defaultValue: DataType.UUIDV4,
  })
  declare id: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  declare is_completed: boolean;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare title: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare description: string;

  @ForeignKey(() => User)
  @Column({
    allowNull: false,
  })
  declare userId: string;

  @BelongsTo(() => User)
  declare user: User;

  declare createdAt: CreationOptional<Date>;

  declare updatedAt: CreationOptional<Date>;
}
