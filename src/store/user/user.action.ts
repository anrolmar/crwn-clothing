import { User } from 'firebase/auth';

import { USER_ACTION_TYPES } from './user.types';
import { AdditionalInformation, UserData } from '../../utils/firebase/auth-firebase.utils';
import { Action, ActionWithPayload, createAction, withMatcher } from '../../utils/reducer/reducer.utils';

type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;
type EmailSignInStart = ActionWithPayload<USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email: string; password: string }>;
type GoogleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>;
type SignInFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_FAILED, string>;
type SignInSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_SUCCESS, UserData>;
type SignUpStart = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_START, { email: string; password: string }>;
type SignUpFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_FAILED, string>;
type SignUpSuccess = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_SUCCESS,
  { user: User; additionalDetails: AdditionalInformation }
>;

export const checkUserSession = withMatcher((): CheckUserSession => createAction(USER_ACTION_TYPES.CHECK_USER_SESSION));

export const emailSignInStart = withMatcher(
  (email: string, password: string): EmailSignInStart =>
    createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password }),
);

export const googleSignInStart = withMatcher(
  (): GoogleSignInStart => createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START),
);

export const signInFailed = withMatcher(
  (error: string): SignInFailed => createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error),
);

export const signInSuccess = withMatcher(
  (user: UserData & { id: string }): SignInSuccess => createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user),
);

export const signUpFailed = withMatcher(
  (error: string): SignUpFailed => createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error),
);

export const signUpSuccess = withMatcher(
  (user: User, additionalDetails: AdditionalInformation): SignUpSuccess =>
    createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalDetails }),
);

export const signUpStart = withMatcher(
  (email: string, password: string, displayName: string): SignUpStart =>
    createAction(USER_ACTION_TYPES.SIGN_UP_START, { email, password, displayName }),
);
