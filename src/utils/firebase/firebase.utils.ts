import { initializeApp } from 'firebase/app';
import { collection, doc, getFirestore, writeBatch } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBV-NGBc_mn1kLzDGSwmDSNpuqaz12pm7g',
  authDomain: 'crwn-clothing-db-77585.firebaseapp.com',
  projectId: 'crwn-clothing-db-77585',
  storageBucket: 'crwn-clothing-db-77585.firebasestorage.app',
  messagingSenderId: '776981865477',
  appId: '1:776981865477:web:2dc217ab9f793e5dd7286c',
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();

type ObjectToAdd = {
  title: string;
};

export const addCollectionAndDocuments = async <T extends ObjectToAdd>(
  collectionKey: string,
  objectsToAdd: T[],
): Promise<void> => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((obj) => {
    const newDocRef = doc(collectionRef, obj.title.toLowerCase());
    batch.set(newDocRef, obj);
  });

  await batch.commit();
};
