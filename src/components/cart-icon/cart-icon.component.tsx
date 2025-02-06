import { FunctionComponent } from 'react';

import ShoppingIcon from '../../assets/shopping-bag.svg?react';
import { useCart } from '../../hooks/useCart.hook';

import './cart-icon.styles.scss';

const CartIcon: FunctionComponent = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useCart();

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
