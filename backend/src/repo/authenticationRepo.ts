import { Service } from "typedi";
import { pgCon } from "../utils/connectionUtils";

@Service()
export class AuthenticationRepo {
  async getUser(username: string) {
    return await pgCon.select().where({ username }).from("users");
  }
}
