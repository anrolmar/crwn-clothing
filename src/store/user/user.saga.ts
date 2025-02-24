import { User } from 'firebase/auth';
import { all, call, put, takeLatest } from 'typed-redux-saga';

import {
  EmailSignInStart,
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutSuccess,
  signUpFailed,
  SignUpStart,
  SignUpSuccess,
  signUpSuccess,
} from './user.action';
import { USER_ACTION_TYPES } from './user.types';
import {
  AdditionalInformation,
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  getCurrentUser,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  signOutUser,
} from '../../utils/firebase/auth-firebase.utils';

export function* isUserAuthenticated() {
  try {
    const userAuth = yield* call(getCurrentUser);
    if (!userAuth) {
      return;
    }
    yield* call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield* put(signInFailed(error as string));
  }
}

export function* signInWithEmail({ payload: { email, password } }: EmailSignInStart) {
  try {
    const credentials = yield* call(signInAuthUserWithEmailAndPassword, email, password);
    if (!credentials) {
      return;
    }

    yield* call(getSnapshotFromUserAuth, credentials.user);
  } catch (error) {
    yield* put(signInFailed(error as string));
  }
}

export function* signInWithGoogle() {
  try {
    const credentials = yield* call(signInWithGooglePopup);
    yield* call(getSnapshotFromUserAuth, credentials.user);
  } catch (error) {
    yield* put(signInFailed(error as string));
  }
}

export function* signOut() {
  try {
    yield* call(signOutUser);
    yield* put(signOutSuccess());
  } catch (error) {
    yield* put(signOutFailed(error as string));
  }
}

export function* signUp({ payload: { email, password, displayName } }: SignUpStart) {
  try {
    const credentials = yield* call(createAuthUserWithEmailAndPassword, email, password);
    if (!credentials) {
      return;
    }
    yield* put(signUpSuccess(credentials?.user, { displayName }));
  } catch (error) {
    yield* put(signUpFailed(error as string));
  }
}

export function* signInAfterSignUp({ payload: { user, additionalDetails } }: SignUpSuccess) {
  yield* call(getSnapshotFromUserAuth, user, additionalDetails);
}

// Entry points

export function* onGoogleSignInStart() {
  yield* takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield* takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignOutStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* onSignUpSuccess() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onSignUpStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* userSagas() {
  yield* all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}

/////////////////////////////////////////
/////////////////////////////////////////

function* getSnapshotFromUserAuth(userAuth: User, additionalDetails?: AdditionalInformation) {
  try {
    const userSnapshot = yield* call(createUserDocumentFromAuth, userAuth, additionalDetails);
    if (userSnapshot) {
      yield* put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    }
  } catch (error) {
    yield* put(signInFailed(error as string));
  }
}

function* onCheckUserSession() {
  yield* takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}
