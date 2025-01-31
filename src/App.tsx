import { Routes, Route } from 'react-router';

import Authentication from './routes/authentication/authentication.component';
import Home from './routes/home/home.component';
import NavBar from './routes/nav-bar/nav-bar.component';
import Shop from './routes/shop/shop.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="auth" element={<Authentication />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
