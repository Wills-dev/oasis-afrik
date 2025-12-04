export interface LoginProps {
  email: string;
  password: string;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
}

export interface UserState {
  user: User | null;
  isAuthenticated: boolean;
}
