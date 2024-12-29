import { TaskDTO } from "../schemas/task.schema";
import { Task } from "../models/task.model";

export class TaskService {
  async createTask(data: TaskDTO): Promise<Task> {
    return Task.create(data);
  }

  async findTaskById(id: string): Promise<Task | null> {
    return Task.findOne({ where: { userId: id } });
  }

  async getAllTaskByUserId(id: string): Promise<Task[] | null> {
    return Task.findAll({ where: { userId: id } });
  }
}
