import { UserData } from '../../utils/firebase/auth-firebase.utils';

export interface UserState {
  readonly currentUser: UserData | null;
  readonly error: string | null;
  readonly isLoading: boolean;
}

export enum USER_ACTION_TYPES {
  CHECK_USER_SESSION = 'user/CHECK_USER_SESSION',
  EMAIL_SIGN_IN_START = 'user/EMAIL_SIGN_IN_START',
  GOOGLE_SIGN_IN_START = 'user/GOOGLE_SIGN_IN_START',
  SET_CURRENT_USER = 'user/SET_CURRENT_USER',
  SIGN_IN_FAILED = 'user/SIGN_IN_FAILED',
  SIGN_IN_SUCCESS = 'user/SIGN_IN_SUCCESS',
  SIGN_OUT_FAILED = 'user/SIGN_OUT_FAILED',
  SIGN_OUT_START = 'user/SIGN_OUT_START',
  SIGN_OUT_SUCCESS = 'user/SIGN_OUT_SUCCESS',
  SIGN_UP_FAILED = 'user/SIGN_UP_FAILED',
  SIGN_UP_START = 'user/SIGN_UP_START',
  SIGN_UP_SUCCESS = 'user/SIGN_UP_SUCCESS',
}
