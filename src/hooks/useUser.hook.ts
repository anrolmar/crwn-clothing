import { useContext } from 'react';

import { UserContext } from '../contexts/user/user.context';

export const useCurrentUser = () => {
  const currentUserContext = useContext(UserContext);

  if (!currentUserContext) {
    throw new Error('useCurrentUser has to be used within <UserContext.Provider>');
  }

  return currentUserContext;
};
