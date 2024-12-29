import { ConfigParams } from "express-openid-connect";
import { AppDataSource } from "./data.source";

export abstract class ConfigServer {
  get initConnect(): Promise<void> {
    return AppDataSource.authenticate();
  }

  public getAuthConfig(): ConfigParams {
    return {
      authRequired: false,
      auth0Logout: true,
      secret: this.getEnvironment("AUTH0_SECRET"),
      baseURL: this.getEnvironment("AUTH_0_BASE_URL"),
      clientID: this.getEnvironment("AUTH0_CLIENT_ID"),
      issuerBaseURL: this.getEnvironment("AUTH0_ISSUER_BASE_URL"),
    };
  }

  public getNumberEnv(k: string): number {
    return Number(this.getEnvironment(k));
  }

  public getEnvironment(k: string): string | undefined {
    return process.env[k];
  }
}
