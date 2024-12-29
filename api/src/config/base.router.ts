import { Router } from "express";

export class BaseRouter<T, U = undefined> {
  public router: Router;
  public controller: T;
  public middleware?: U;
  constructor(TController: { new (): T }, UMiddleware?: { new (): U }) {
    this.router = Router();
    this.controller = new TController();
    this.middleware = UMiddleware && new UMiddleware();
    this.routes();
  }

  routes() {}
}
