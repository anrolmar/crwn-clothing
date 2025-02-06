import { FunctionComponent } from 'react';

import { useCart } from '../../hooks/useCart.hook';
import { Product } from '../../types';
import Button from '../button/button.component';

import './product-card.styles.scss';

interface ProductCardProps {
  product: Product;
}

const ProductCard: FunctionComponent<ProductCardProps> = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useCart();

  const handleAddProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={handleAddProductToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
