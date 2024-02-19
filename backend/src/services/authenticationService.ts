import { Service } from "typedi";
import { AuthenticationRepo } from "../repo/authenticationRepo";
import { comparePasswords } from "../utils/passwordUtils";
import { generateToken } from "../utils/jwtUtils";

@Service()
export class AuthenticationService {
  constructor(private authenticationRepo: AuthenticationRepo) {}

  async authenticate(username: string, password: string) {
    const user = await this.authenticationRepo.getUser(username);
    if (user) {
      const validPassword = await comparePasswords(password, user.password);
      if (validPassword) {
        return generateToken({ ...user, role: user.user_role });
      }
    }
    return false;
  }
}
