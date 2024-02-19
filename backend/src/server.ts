import express, { Express } from "express";
import * as http from "http";
import cookieParser from "cookie-parser";
import cors from "cors";
import { CommonRoutesConfig } from "./common/abstract/common.routes.config";
import { AuthenticationRoutes } from "./routes/authentication.route";
import { Container } from "typedi";
import { PORT } from "../environmentVariables";
import { LoggerService } from "./services/loggerService";
import { Logger } from "winston";

export class Server {
  private server!: http.Server;
  private logger: Logger;
  routes: CommonRoutesConfig[] = [];

  constructor(
    private app: Express,
    private loggerService: LoggerService
  ) {
    this.logger = this.loggerService.logger;
    this.logger.defaultMeta = { meta: "Server" };

    this.init();
    this.listen(Number(PORT));
  }

  private init() {
    this.server = http.createServer(this.app);

    this.app.use(express.json());
    this.app.use(cookieParser());
    this.app.use(cors());

    //TODO: Implement Auth Route
    this.routes.push(Container.get<AuthenticationRoutes>(AuthenticationRoutes));
  }

  private listen(port: number | string) {
    this.server.listen(port, () => {
      this.routes.forEach((route: CommonRoutesConfig) => {
        this.logger.info(`${route.getName()} initialized`);
      });

      this.logger.info(`Server is running at http://localhost:${port}`, {
        meta: "Server",
      });
    });
  }

  async stop() {
    this.logger.warn("Shutting down server...", {
      meta: "Server",
    });
    this.server.close(() => {
      this.logger.info("Server Shutdown", { meta: "SIGINT" });
    });
  }
}
