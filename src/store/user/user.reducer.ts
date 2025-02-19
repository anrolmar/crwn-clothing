import { USER_ACTION_TYPES, UserAction, UserState } from './user.types';

const INITIAL_STATE: UserState = {
  currentUser: undefined,
};

export const userReducer = (state: UserState = INITIAL_STATE, action: UserAction): UserState => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return state;
  }
};
