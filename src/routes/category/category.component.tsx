import { FunctionComponent, useEffect, useState } from 'react';
import { useParams } from 'react-router';

import ProductCard from '../../components/product-card/product-card.component';
import { useCategories } from '../../hooks/useCategories.hook';
import { Product } from '../../types';

import './category.styles.scss';

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
      <h2 className="category-title">{category?.toUpperCase()}</h2>
      <div className="category-container">
        {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </>
  );
};

export default CategoryPage;
