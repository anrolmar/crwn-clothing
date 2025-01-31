import { User } from 'firebase/auth';
import { createContext, Dispatch, SetStateAction } from 'react';

export type UserContextType = {
  currentUser: User | null;
  setCurrentUser: Dispatch<SetStateAction<UserContextType['currentUser']>>;
};

export const UserContext = createContext<UserContextType>(null!);
