import { User } from 'firebase/auth';

export interface UserAction {
  type: USER_ACTION_TYPES;
  payload: User | null;
}

export interface UserState {
  currentUser: User | null;
}

export enum USER_ACTION_TYPES {
  SET_CURRENT_USER = 'user/SET_CURRENT_USER',
}
