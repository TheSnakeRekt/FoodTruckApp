import bcrypt from "bcrypt";

const SALT_ROUNDS = 25;

export const hashPassword = async (password: string) => {
  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
  return hashedPassword;
};

export const comparePasswords = async (
  password: string,
  hashedPassword: string
) => {
  return await bcrypt.compare(password, hashedPassword);
};
