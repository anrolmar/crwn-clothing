import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles';
import { selectCartItems } from '../../store/cart/cart.selector';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown: FunctionComponent = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const handleGoToCheckout = () => {
    void navigate('/checkout');
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={handleGoToCheckout}>Go to checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
