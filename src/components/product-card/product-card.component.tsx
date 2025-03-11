import { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  ProductCardButton,
  ProductCardContainer,
  ProductCardFooter,
  ProductCardImage,
  ProductCardName,
  ProductCardPrice,
} from './product-card.styles';
import { addItemToCart } from '../../store/cart/cart.action';
import { setCartItems } from '../../store/cart/cart.reducer';
import { selectCartItems } from '../../store/cart/cart.selector';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: FunctionComponent<ProductCardProps> = ({ product }) => {
  const { name, imageUrl, price } = product;

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handleAddProductToCart = () => {
    const newCartItems = addItemToCart(cartItems, product);
    dispatch(setCartItems(newCartItems));
  };

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
