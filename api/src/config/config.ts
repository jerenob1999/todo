import { ConfigParams } from "express-openid-connect";
import { AppDataSource } from "./data.source";

export abstract class ConfigServer {
  get initConnect(): Promise<void> {
    return AppDataSource.authenticate();
  }

  public getNumberEnv(k: string): number {
    return Number(this.getEnvironment(k));
  }

  public getEnvironment(k: string): string | undefined {
    return process.env[k];
  }
}
