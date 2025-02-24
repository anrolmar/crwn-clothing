import { UnknownAction } from 'redux';

import { signInFailed, signInSuccess } from './user.action';
import { UserState } from './user.types';

const INITIAL_STATE: UserState = {
  currentUser: null,
  error: null,
  isLoading: false,
};

export const userReducer = (state: UserState = INITIAL_STATE, action = {} as UnknownAction): UserState => {
  if (signInFailed.match(action)) {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  }

  if (signInSuccess.match(action)) {
    return {
      ...state,
      isLoading: false,
      currentUser: action.payload,
    };
  }

  return state;
};
