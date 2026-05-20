export interface User {
  _id: string;
  username: string;
  password: string;
  email: string;
  createAt: Date;
  updatedAt: Date;
}

export interface userState {
  users: User[];
  selectedUser: User | null;
  loading: boolean;
  error: string | null;
}
