import { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import { CartItem } from '../../types';

interface CheckoutItemProps {
  cartItem: CartItem;
}

const CheckoutItem: FunctionComponent<CheckoutItemProps> = ({ cartItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  // Event handlers
  const handleAddProductToCart = () => {
    const product = cartItems.find((product) => product.id === cartItem.id);
    if (product) {
      addItemToCart(cartItems, product);
    }
  };
  const handleClearItemFromCart = () => dispatch(clearItemFromCart(cartItems, cartItem));
  const handleRemoveItemFromCart = () => dispatch(removeItemFromCart(cartItems, cartItem));

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
