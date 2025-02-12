import { User } from 'firebase/auth';
import { useEffect, useReducer } from 'react';

import { UserContext } from './user.context';
import { USER_ACTION_TYPES, userReducer, UserState } from '../../reducers/user.reducer';
import { createUserDocumentFromAuth, onAuthStateChangedListener } from '../../utils/firebase/auth-firebase.utils';

type UserContextProviderProps = {
  children: React.ReactNode;
};

const INITIAL_STATE: UserState = {
  currentUser: null,
};

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const setCurrentUser = (user: User | null) => dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });

  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user: User | null) => {
      if (user) {
        void createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
