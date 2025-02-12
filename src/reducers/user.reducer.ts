import { User } from 'firebase/auth';

export enum USER_ACTION_TYPES {
  SET_CURRENT_USER = 'SET_CURRENT_USER',
}

interface UserAction {
  type: USER_ACTION_TYPES;
  payload: User | null;
}

export interface UserState {
  currentUser: User | null;
}

export const userReducer = (state: UserState, action: UserAction): UserState => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};
