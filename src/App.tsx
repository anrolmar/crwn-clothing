import { Routes, Route } from 'react-router';

import Home from './routes/home/home.component';
import NavBar from './routes/nav-bar/nav-bar.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
