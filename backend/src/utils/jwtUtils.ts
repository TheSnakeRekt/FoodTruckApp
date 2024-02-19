import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../environmentVariables";

export interface TokenPayload {
  username: string;
  role: string;
  contact: string;
  email: string;
}

export function generateToken(payload: TokenPayload): string {
  return jwt.sign(payload, JWT_SECRET);
}

export function verifyToken(token: string): TokenPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as TokenPayload;
  } catch (error) {
    return null;
  }
}
