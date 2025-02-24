import { UnknownAction } from 'redux';

import { signInFailed, signInSuccess, signOutFailed, signOutSuccess, signUpFailed } from './user.action';
import { UserState } from './user.types';

const INITIAL_STATE: UserState = {
  currentUser: null,
  error: null,
  isLoading: false,
};

export const userReducer = (state: UserState = INITIAL_STATE, action = {} as UnknownAction): UserState => {
  if (signInSuccess.match(action)) {
    return {
      ...state,
      currentUser: action.payload,
    };
  }

  if (signInFailed.match(action) || signUpFailed.match(action) || signOutFailed.match(action)) {
    return {
      ...state,
      error: action.payload,
    };
  }

  if (signOutSuccess.match(action)) {
    return {
      ...state,
      currentUser: null,
    };
  }

  return state;
};
