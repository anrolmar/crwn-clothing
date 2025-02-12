import { User } from 'firebase/auth';
import { createContext } from 'react';

export type UserContextType = {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
};

export const UserContext = createContext<UserContextType>(null!);
