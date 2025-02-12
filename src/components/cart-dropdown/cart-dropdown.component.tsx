import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router';

import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles';
import { useCart } from '../../hooks/useCart.hook';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown: FunctionComponent = () => {
  const { cartItems } = useCart();
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
