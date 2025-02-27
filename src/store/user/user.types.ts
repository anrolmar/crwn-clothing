import { User } from 'firebase/auth';

export interface UserState {
  currentUser: User | null;
  error: string | null;
  isLoading: boolean;
}
