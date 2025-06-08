import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './Calculator';
import Home from './Home';

import classNames from 'classnames';
import NavBar from './Common/Nav';
import InfiniteScroll from './InfiniteScroll';
import ReactInfiniteScroll from './InfiniteScroll/react';
import VanillaInfiniteScroll from './InfiniteScroll/vanills';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/infinite_scroll" element={<InfiniteScroll />}>
          <Route path="react" element={<ReactInfiniteScroll />} />
          <Route path="vanilla" element={<VanillaInfiniteScroll />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
