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

  async deleteTaskById(id: string): Promise<string> {
    await Task.destroy({ where: { id } });

    return "Task deleted successfully.";
  }

  async updateTask(id: string, data: TaskDTO): Promise<Task | null> {
    const [affectedRows] = await Task.update(data, {
      where: { id },
    });

    if (affectedRows === 0) {
      return null;
    }

    const updatedTask = await Task.findByPk(id);

    return updatedTask;
  }
}
