import { TaskRouter } from "./src/routes/task.router";
import { auth } from "express-oauth2-jwt-bearer";
import { ConfigServer } from "./src/config/config";
import express, { Application } from "express";
import { checkJwt } from "./src/middlewares/auth.middleware";
import { Router } from "express";
import morgan from "morgan";
import cors from "cors";

class Server extends ConfigServer {
  private app: Application;
  private port = this.getNumberEnv("PORT");
  private baseUrl = this.getEnvironment("AUTH0_BASE_URL");
  private jwtCheck = {
    audience: this.getEnvironment("AUTH0_AUDIENCE"),
    issuerBaseURL: this.getEnvironment("AUTH0_ISSUER_BASE_URL"),
    tokenSigningAlg: "RS256",
  };

  constructor() {
    super();
    this.app = express();
    this.app.use(morgan("dev"));
    this.dbConnect();
    this.middlewares();
    this.app.use(
      cors({
        origin: this.baseUrl,
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
        credentials: true,
      })
    );
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
