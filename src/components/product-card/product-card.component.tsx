import { FunctionComponent } from 'react';

import {
  ProductCardButton,
  ProductCardContainer,
  ProductCardFooter,
  ProductCardImage,
  ProductCardName,
  ProductCardPrice,
} from './product-card.styles';
import { useCart } from '../../hooks/useCart.hook';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: FunctionComponent<ProductCardProps> = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useCart();

  const handleAddProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <ProductCardImage src={imageUrl} alt={`${name}`} />
      <ProductCardFooter>
        <ProductCardName>{name}</ProductCardName>
        <ProductCardPrice>{price}</ProductCardPrice>
      </ProductCardFooter>
      <ProductCardButton onClick={handleAddProductToCart}>Add to cart</ProductCardButton>
    </ProductCardContainer>
  );
};

export default ProductCard;
