import { AppDataSource } from "./data.source";

export abstract class ConfigServer {
  get initConnect(): Promise<void> {
    return AppDataSource.authenticate();
  }
}
