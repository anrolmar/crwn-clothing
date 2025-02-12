import { FunctionComponent } from 'react';

import { CartItemContainer, CartItemImage, ItemDetailsContainer, ItemName } from './cart-item.styles';
import { CartItem as CartItemType } from '../../types';

interface CartItemProps {
  cartItem: CartItemType;
}

const CartItem: FunctionComponent<CartItemProps> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt={name} />
      <ItemDetailsContainer>
        <ItemName>{name}</ItemName>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
