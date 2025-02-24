import { collection, query, getDocs } from 'firebase/firestore';

import { db } from './firebase.utils';
import { Category } from '../../types';

export const getCategoriesAndProducts = async (): Promise<Category[]> => {
  const categoriesRef = collection(db, 'categories');

  const q = query(categoriesRef);
  const categoriesSnapshot = await getDocs(q);

  return categoriesSnapshot.docs.map((docSnapshot) => docSnapshot.data() as Category);
};
