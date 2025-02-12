import { FunctionComponent, useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { CategoryTitle, CategoryContainer } from './category.styles';
import ProductCard from '../../components/product-card/product-card.component';
import { useCategories } from '../../hooks/useCategories.hook';
import { Product } from '../../types';

const CategoryPage: FunctionComponent = () => {
  const { category } = useParams();
  const { categories } = useCategories();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (category && categories[category]) {
      setProducts(categories[category]);
    }
  }, [category, categories]);

  return (
    <>
      <CategoryTitle>{category?.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
      </CategoryContainer>
    </>
  );
};

export default CategoryPage;
