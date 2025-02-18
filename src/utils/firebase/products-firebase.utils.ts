import { doc, collection, writeBatch, query, getDocs } from 'firebase/firestore';

import { db } from './firebase.utils';
import { Category, Product } from '../../types';

export const addCollectionAndDocuments = async (collectionKey: string, objectsToAdd: Category[]) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((obj) => {
    const newDocRef = doc(collectionRef, obj.title.toLowerCase());
    batch.set(newDocRef, obj);
  });

  await batch.commit();
};

export const getCategoriesAndProducts = async () => {
  const categoriesRef = collection(db, 'categories');

  const q = query(categoriesRef);
  const categoriesSnapshot = await getDocs(q);

  return categoriesSnapshot.docs.map((docSnapshot) => docSnapshot.data() as Category);
};
