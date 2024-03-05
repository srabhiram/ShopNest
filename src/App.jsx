import Signup from "./components/Signup";
import { Routes, Route } from "react-router-dom";
import { auth } from "./Authentication/Firebase";
import { Home } from "./components/Home";

function App() {
  console.log(auth.currentUser);
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
