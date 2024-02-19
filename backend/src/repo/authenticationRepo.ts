import { Service } from "typedi";
import { pgCon } from "../utils/connectionUtils";
import { UserEntity } from "../models/user.model";

@Service()
export class AuthenticationRepo {
  async getUser(username: string): Promise<UserEntity | false> {
    const user = await pgCon.select().where({ username }).from("users");
    return user && user[0] ? { ...user[0] } : false;
  }
}
