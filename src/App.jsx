import Signup from "./components/Signup";
import { Routes, Route } from "react-router-dom";
import { auth } from "./Authentication/Firebase";
import { Home } from "./components/Home";
import { ProductDetails } from "./components/ProductDetails";
import CartDetails from "./components/CartDetails";

function App() {
  console.log(auth.currentUser);
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<ProductDetails />} />
        <Route path="/cart" element={<CartDetails />} />
      </Routes>
    </>
  );
}

export default App;
