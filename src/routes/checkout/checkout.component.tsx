import { FunctionComponent } from 'react';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { useCart } from '../../hooks/useCart.hook';

import './checkout.styles.scss';

const CheckoutPage: FunctionComponent = () => {
  const { cartItems, cartTotal } = useCart();

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem cartItem={cartItem} key={cartItem.id} />
      ))}

      <span className="total">Total: ${cartTotal}</span>
    </div>
  );
};

export default CheckoutPage;
