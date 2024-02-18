
import { Application, Request, Response, NextFunction} from "express";
import { CommonRoutesConfig } from "../common/abstract/common.routes.config"
import { Service } from 'typedi';
import { AuthenticationController } from "../controllers/authenticationController";

@Service()
export class AuthenticationRoutes extends CommonRoutesConfig {
  static readonly routeName = "AuthenticationRoutes";

  constructor(private routesController: AuthenticationController) {
    super(AuthenticationRoutes.routeName);
  }

  configureRoutes(): Application {
    this.app
      .route("/auth")
      .post(async (req: Request, res: Response) => {
        const data = await this.routesController.authenticate(req.body)
        if (data !== null) {
          res.status(200).send(data);
        } else {
          res.status(404).send(data);
        }
      })
      .get();

    return this.app;
  }
}