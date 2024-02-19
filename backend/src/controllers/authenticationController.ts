import { AuthenticationService } from "../services/authenticationService";
import { Service } from "typedi";
import "reflect-metadata";
import { Request, Response } from "express";

@Service()
export class AuthenticationController {
  constructor(private authenticationService: AuthenticationService) {}

  async authenticate(req: Request, res: Response) {
    const { username, password } = req.body;
    const data = await this.authenticationService.authenticate(
      username,
      password
    );
    if (data !== null) {
      res.status(200).send(data);
    } else {
      res.status(404).send(data);
    }
  }

  currentAuth = (req: Request, res: Response) => {
    if (req.user !== null) {
      res.status(200).send(req.user);
    }
  };
}
