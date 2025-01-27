import { Routes, Route } from 'react-router';

import Home from './routes/home/home.component';
import NavBar from './routes/nav-bar/nav-bar.component';
import SignIn from './routes/sign-in/sign-in.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />}></Route>
        <Route path="sign-in" element={<SignIn />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
