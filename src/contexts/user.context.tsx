import { User } from 'firebase/auth';
import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';

import { createUserDocumentFromAuth, onAuthStateChangedListener, signOutUser } from '../utils/firebase/firebase.utils';

type UserContextProviderProps = {
  children: React.ReactNode;
};

type UserContextType = {
  currentUser: User | null;
  setCurrentUser: Dispatch<SetStateAction<UserContextType['currentUser']>>;
};

const UserContext = createContext<UserContextType>(null!);

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

export const useCurrentUser = () => {
  const currentUserContext = useContext(UserContext);

  if (!currentUserContext) {
    throw new Error('useCurrentUser has to be used within <UserContext.Provider>');
  }

  return currentUserContext;
};
