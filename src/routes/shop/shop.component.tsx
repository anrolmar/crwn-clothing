import { FunctionComponent } from 'react';

import { useProducts } from '../../hooks/useProducts.hook';

const Shop: FunctionComponent = () => {
  const { products } = useProducts();

  return (
    <div>
      {products.map(({ id, name }) => (
        <div key={id}>
          <h1>{name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Shop;
