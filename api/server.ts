import { TaskRouter } from "./src/routes/task.router";
import { auth } from "express-openid-connect";
import { ConfigServer } from "./src/config/config";
import express, { Application } from "express";
import { Router } from "express";
import morgan from "morgan";
import cors from "cors";

class Server extends ConfigServer {
  private app: Application;
  private port = this.getNumberEnv("PORT");
  private authConfig = this.getAuthConfig();

  constructor() {
    super();
    this.app = express();
    this.app.use(morgan("dev"));
    this.dbConnect();
    this.middlewares();
    this.app.use(
      cors({
        origin: true,
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
        credentials: true,
      })
    );
    this.app.use(auth(this.authConfig));
    this.app.use("/api", this.routers());
  }

  private middlewares(): void {
    this.app.use(express.json());
  }

  async dbConnect(): Promise<void> {
    return this.initConnect
      .then(() => {
        console.log("Connect Success");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  routers(): Array<Router> {
    return [new TaskRouter().router];
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en http://localhost:${this.port}`);
    });
  }
}

export default Server;
