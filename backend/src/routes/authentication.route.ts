import { Application, Request, Response } from "express";
import { CommonRoutesConfig } from "../common/abstract/common.routes.config";
import { Service } from "typedi";
import { AuthenticationController } from "../controllers/authenticationController";
import { authenticateJWT } from "../middlewares/verify";

@Service()
export class AuthenticationRoutes extends CommonRoutesConfig {
  static readonly routeName = "AuthenticationRoutes";

  constructor(private routesController: AuthenticationController) {
    super(AuthenticationRoutes.routeName);
  }

  configureRoutes(): Application {
    this.app
      .route("/auth")
      .post(this.routesController.authenticate)
      .get(authenticateJWT, this.routesController.currentAuth);

    return this.app;
  }
}
