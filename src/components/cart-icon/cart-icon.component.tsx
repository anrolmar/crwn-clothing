import { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles';
import { toggleCartHidden } from '../../store/cart/cart.action';
import { selectCartCount } from '../../store/cart/cart.selector';

const CartIcon: FunctionComponent = () => {
  const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCount);
  const toggleIsCartOpen = () => dispatch(toggleCartHidden());

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
