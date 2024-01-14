import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Book from "./pages/Book/Book";
import Blog from "./pages/Blog/Blog";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/book" element={<Book />} />
        <Route path="/book/:id" element={<Book />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
