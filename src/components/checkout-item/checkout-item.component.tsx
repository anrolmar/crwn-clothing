import { FunctionComponent } from 'react';

import { useCart } from '../../hooks/useCart.hook';
import { useCategories } from '../../hooks/useCategories.hook';
import { CartItem } from '../../types';

import './checkout-item.styles.scss';

interface CheckoutItemProps {
  cartItem: CartItem;
}

const CheckoutItem: FunctionComponent<CheckoutItemProps> = ({ cartItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;

  const { addItemToCart, clearItemFromCart, removeItemFromCart } = useCart();
  const { categories } = useCategories();

  // Event handlers
  const handleAddProductToCart = () => {
    const product = products.find((product) => product.id === cartItem.id);
    if (product) {
      addItemToCart(product);
    }
  };

  const handleClearItemFromCart = () => clearItemFromCart(cartItem);
  const handleRemoveItemFromCart = () => removeItemFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={handleRemoveItemFromCart}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={handleAddProductToCart}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={handleClearItemFromCart}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
