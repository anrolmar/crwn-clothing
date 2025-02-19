import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';

import CategoryPreview from '../../components/category-preview/category-preview.component';
import Spinner from '../../components/spinner/spinner.components';
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/categories/category.selector';

const CategoriesPreviewPage: FunctionComponent = () => {
  const categories = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categories).map((title) => {
          const products = categories[title];

          return <CategoryPreview key={title} title={title} products={products} />;
        })
      )}
    </>
  );
};

export default CategoriesPreviewPage;
