import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router';

import { useCart } from '../../hooks/useCart.hook';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown: FunctionComponent = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const handleGoToCheckout = () => {
    void navigate('/checkout');
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={handleGoToCheckout}>Go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
