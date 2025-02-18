import { FunctionComponent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router';

import { setCategories } from '../../store/categories/category.action';
import { getCategoriesAndProducts } from '../../utils/firebase/products-firebase.utils';
import CategoriesPreviewPage from '../categories-preview/categories-preview.component';
import CategoryPage from '../category/category.component';

const ShopPage: FunctionComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategories = async () => {
      const categories = await getCategoriesAndProducts();
      dispatch(setCategories(categories));
    };

    void getCategories();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreviewPage />} />
      <Route path=":category" element={<CategoryPage />} />
    </Routes>
  );
};

export default ShopPage;
