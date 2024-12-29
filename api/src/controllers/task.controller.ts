import { HttpResponse } from "../shared/response/http.response";
import { TaskService } from "../services/task.service";
import { Request, Response } from "express";
import { TaskDTO, taskSchema } from "../schemas/task.schema";

export class TaskController {
  constructor(
    private readonly taskService: TaskService = new TaskService(),
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {}
  async createTask(req: Request<{}, {}, TaskDTO>, res: Response) {
    const task = req.body;
    const validation = taskSchema.safeParse(req.body);

    if (!validation.success) {
      throw this.httpResponse.Error(res, validation.error.issues);
    }

    try {
      const data = await this.taskService.createTask(task);
      return this.httpResponse.Ok(res, data);
    } catch (error) {
      console.error(error);
      return this.httpResponse.Error(res, error);
    }
  }

  async getAllTaskByUserId(req: Request<string>, res: Response) {
    const id = req.params;
    try {
      const data = await this.taskService.getAllTaskByUserId(id);
      return this.httpResponse.Ok(res, data);
    } catch (error) {
      console.error(error);
      return this.httpResponse.Error(res, error);
    }
  }

  async getTaskById(req: Request, res: Response) {
    console.log(req.oidc.user);
    const { id } = req.params;
    try {
      const data = await this.taskService.findTaskById(id);
      if (!data) {
        return this.httpResponse.NotFound(res, "Task not found");
      }
      return this.httpResponse.Ok(res, data);
    } catch (error) {
      console.error(error);
      return this.httpResponse.Error(res, error);
    }
  }

  async updateTask(req: Request, res: Response) {
    const task: TaskDTO = req.body;
    const id = req.params.id;
    const validation = taskSchema.safeParse(req.body);

    if (!validation.success) {
      throw this.httpResponse.Error(res, validation.error.issues);
    }

    try {
      const data = await this.taskService.updateTask(id, task);
      return this.httpResponse.Ok(res, data);
    } catch (error) {
      console.error(error);
      return this.httpResponse.Error(res, error);
    }
  }

  async deleteTaskById(req: Request, res: Response) {
    const id = req.params.id;
    try {
      const data = await this.taskService.deleteTaskById(id);
      return this.httpResponse.Ok(res, data);
    } catch (error) {
      console.error(error);
      return this.httpResponse.Error(res, error);
    }
  }
}
