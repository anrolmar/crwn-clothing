import { FunctionComponent } from 'react';

import {
  CheckoutItemContainer,
  ImageContainer,
  Span,
  SpanQuantity,
  ArrowQuantity,
  ValueQuantity,
  RemoveButtonContainer,
  Image,
} from './checkout-item.styles';
import { useCart } from '../../hooks/useCart.hook';
import { CartItem } from '../../types';

interface CheckoutItemProps {
  cartItem: CartItem;
}

const CheckoutItem: FunctionComponent<CheckoutItemProps> = ({ cartItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;

  const { cartItems, addItemToCart, clearItemFromCart, removeItemFromCart } = useCart();

  // Event handlers
  const handleAddProductToCart = () => {
    const product = cartItems.find((product) => product.id === cartItem.id);
    if (product) {
      addItemToCart(product);
    }
  };

  const handleClearItemFromCart = () => clearItemFromCart(cartItem);
  const handleRemoveItemFromCart = () => removeItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Span>{name}</Span>
      <SpanQuantity>
        <ArrowQuantity onClick={handleRemoveItemFromCart}>&#10094;</ArrowQuantity>
        <ValueQuantity>{quantity}</ValueQuantity>
        <ArrowQuantity onClick={handleAddProductToCart}>&#10095;</ArrowQuantity>
      </SpanQuantity>
      <Span>{price}</Span>
      <RemoveButtonContainer onClick={handleClearItemFromCart}>&#10005;</RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
