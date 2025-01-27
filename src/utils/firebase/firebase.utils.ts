import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, User } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, FirestoreError } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBV-NGBc_mn1kLzDGSwmDSNpuqaz12pm7g',
  authDomain: 'crwn-clothing-db-77585.firebaseapp.com',
  projectId: 'crwn-clothing-db-77585',
  storageBucket: 'crwn-clothing-db-77585.firebasestorage.app',
  messagingSenderId: '776981865477',
  appId: '1:776981865477:web:2dc217ab9f793e5dd7286c',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth: User) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log('error creating the user', (error as FirestoreError).message);
    }
  }

  return userDocRef;
};
