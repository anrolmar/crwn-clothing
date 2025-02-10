import { FunctionComponent } from 'react';
import { Route, Routes } from 'react-router';

import CategoriesPreviewPage from '../categories-preview/categories-preview.component';
import CategoryPage from '../category/category.component';

import './shop.styles.scss';

const ShopPage: FunctionComponent = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreviewPage />} />
      <Route path=":category" element={<CategoryPage />} />
    </Routes>
  );
};

export default ShopPage;
