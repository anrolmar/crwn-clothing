import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router';

import Authentication from './routes/authentication/authentication.component';
import CheckoutPage from './routes/checkout/checkout.component';
import HomePage from './routes/home/home.component';
import NavBar from './routes/nav-bar/nav-bar.component';
import ShopPage from './routes/shop/shop.component';
import { checkUserSession } from './store/user/user.action';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<HomePage />}></Route>
        <Route path="shop/*" element={<ShopPage />}></Route>
        <Route path="auth" element={<Authentication />}></Route>
        <Route path="checkout" element={<CheckoutPage />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
