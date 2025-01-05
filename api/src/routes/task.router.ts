import { BaseRouter } from "../config/base.router";
import { TaskController } from "../controllers/task.controller";
import { Request, Response } from "express";
import { TaskDTO } from "../schemas/task.schema";
import { requiresAuth } from "express-openid-connect";

export class TaskRouter extends BaseRouter<TaskController> {
  constructor() {
    super(TaskController);
  }

  routes(): void {
    this.router.post(
      "/todos",
      requiresAuth(),
      async (req: Request, res: Response) => {
        await this.controller.createTask(req, res);
      }
    );

    this.router.get("/todos", async (req: Request, res: Response) => {
      await this.controller.getAllTaskByUserId(req, res);
    });

    this.router.get(
      "/todos/:id",
      requiresAuth(),
      async (req: Request, res: Response) => {
        await this.controller.getTaskById(req, res);
      }
    );

    this.router.put(
      "/todos/:id",
      requiresAuth(),
      async (req: Request, res: Response) => {
        await this.controller.updateTask(req, res);
      }
    );

    this.router.delete(
      "/todos/:id",
      requiresAuth(),
      async (req: Request, res: Response) => {
        await this.controller.deleteTaskById(req, res);
      }
    );
  }
}
