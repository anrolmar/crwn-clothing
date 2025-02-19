import { FunctionComponent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { CategoryTitle, CategoryContainer } from './category.styles';
import ProductCard from '../../components/product-card/product-card.component';
import Spinner from '../../components/spinner/spinner.components';
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/categories/category.selector';
import { Product } from '../../types';

const CategoryPage: FunctionComponent = () => {
  const { category } = useParams();
  const categories = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (category && categories[category]) {
      setProducts(categories[category]);
    }
  }, [category, categories]);

  return (
    <>
      <CategoryTitle>{category?.toUpperCase()}</CategoryTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
        </CategoryContainer>
      )}
    </>
  );
};

export default CategoryPage;
