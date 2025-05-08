import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './Calculator';
import Home from './Home';

import classNames from 'classnames';
import NavBar from './Common/Nav';
import InfiniteScroll from './InfiniteScroll';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/infinite_scroll" element={<InfiniteScroll />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
