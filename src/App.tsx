import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './Calculator';
import Home from './Home';

import NavBar from './Common/Nav';
import InfiniteScroll from './InfiniteScroll';
import ReactInfiniteScroll from './InfiniteScroll/react';
import VanillaInfiniteScroll from './InfiniteScroll/vanills';
import CSSExamples from './CSS';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from './Dropdown';
import Accordion from './Accordion';


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
        <Route path="/css" element={<CSSExamples />} />
        <Route path="/dropdown" element={<Dropdown />} />
        <Route path="/accordion" element={<Accordion />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
