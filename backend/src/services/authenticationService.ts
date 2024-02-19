import { Service } from "typedi";
import { AuthenticationRepo } from "../repo/authenticationRepo";

@Service()
export class AuthenticationService {
  constructor(private authenticationRepo: AuthenticationRepo) {}

  async authenticate(username: string, password: string) {
    const user = await this.authenticationRepo.getUser(username);
  }
}
