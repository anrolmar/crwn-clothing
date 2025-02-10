import { User } from 'firebase/auth';
import { useEffect, useState } from 'react';

import { UserContext, UserContextType } from './user.context';
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
  signOutUser,
} from '../../utils/firebase/auth-firebase.utils';

type UserContextProviderProps = {
  children: React.ReactNode;
};

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [currentUser, setCurrentUser] = useState<UserContextType['currentUser']>(null);

  void signOutUser();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user: User | null) => {
      if (user) {
        void createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={{ currentUser, setCurrentUser }}>{children}</UserContext.Provider>;
};
