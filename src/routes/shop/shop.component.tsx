import { FunctionComponent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router';

import { fetchCategoriesStart } from '../../store/categories/category.action';
import CategoriesPreviewPage from '../categories-preview/categories-preview.component';
import CategoryPage from '../category/category.component';
const ShopPage: FunctionComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreviewPage />} />
      <Route path=":category" element={<CategoryPage />} />
    </Routes>
  );
};

export default ShopPage;
