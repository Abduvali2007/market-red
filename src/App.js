import { Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./component/Hero";
import Product from "./component/Product";
import Basket from "./component/Basket";
import Header from "./component/Header";
import Favorite from "./component/Favorite";
import ProductDetails from "./component/Pages/ProductDetails";
import Bucket from "./component/Bucket";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/product" element={<Product />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/productDetails/:proId" element={<ProductDetails />} />
        <Route path="/bucket" element={<Bucket />} />
      </Routes>
    </div>
  );
}

export default App;
