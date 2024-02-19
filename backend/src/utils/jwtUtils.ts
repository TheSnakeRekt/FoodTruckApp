import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../environmentVariables";

export interface TokenPayload {
  userId: string;
  // Etc
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
