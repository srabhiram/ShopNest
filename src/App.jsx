import Signup from "./components/Signup";
import { Routes, Route } from "react-router-dom";
import { auth } from "./Authentication/Firebase";
import { Home } from "./components/Home";
import { ProductDetails } from "./components/ProductDetails";
import CartDetails from "./components/CartDetails";
import Category from "./components/Category";

function App() {
  console.log(auth.currentUser);
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/product" element={<ProductDetails />} />
        <Route path="/cart" element={<CartDetails />} />
      </Routes>
    </>
  );
}

export default App;
