import { AuthenticationService } from "../services/authenticationService";
import { Service } from "typedi";
import "reflect-metadata";

@Service()
export class AuthenticationController {
  constructor(private authenticationService: AuthenticationService) {}

  async authenticate({ username, password }: any) {
    this.authenticationService.authenticate(username, password);
  }
}
