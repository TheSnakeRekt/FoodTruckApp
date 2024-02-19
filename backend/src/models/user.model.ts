export interface UserEntity {
  username: string;
  user_role: string;
  contact: string;
  email: string;
  password: string;
  created_at: string;
  updated_at: string;
}

export interface UserDTO {
  username: string;
  role: string;
  contact: string;
  email: string;
}
