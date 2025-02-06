import { FunctionComponent } from 'react';

import { CartItem as CartItemType } from '../../types';
import './cart-item.styles.scss';

interface CartItemProps {
  cartItem: CartItemType;
}

const CartItem: FunctionComponent<CartItemProps> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
