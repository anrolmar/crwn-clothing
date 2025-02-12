import { FunctionComponent } from 'react';

import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles';
import { useCart } from '../../hooks/useCart.hook';

const CartIcon: FunctionComponent = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useCart();

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
