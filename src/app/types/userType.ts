export interface UserList {
  next: boolean;
  totalPages: number;
  currentPage: number;
  users: User[];
}

export interface User {
  username: string;
  status: string;
  fullName: string;
  joinDate: string;
  phoneNumber: string;
}
