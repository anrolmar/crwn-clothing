import { FunctionComponent } from 'react';

import ProductCard from '../../components/product-card/product-card.component';
import { useProducts } from '../../hooks/useProducts.hook';

import './shop.styles.scss';

const ShopPage: FunctionComponent = () => {
  const { products } = useProducts();

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ShopPage;
