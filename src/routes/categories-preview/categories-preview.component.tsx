import { FunctionComponent } from 'react';

import CategoryPreview from '../../components/category-preview/category-preview.component';
import { useCategories } from '../../hooks/useCategories.hook';

const CategoriesPreviewPage: FunctionComponent = () => {
  const { categories } = useCategories();

  return (
    <>
      {Object.keys(categories).map((title) => {
        const products = categories[title];
        return <CategoryPreview key={title} title={title} products={products} />;
      })}
    </>
  );
};

export default CategoriesPreviewPage;
