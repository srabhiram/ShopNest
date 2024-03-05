import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import { Routes, Route } from "react-router-dom";
import { auth } from "./Authentication/Firebase";

function App() {
  console.log(auth.currentUser);
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/navbar" element={<Navbar />} />
    </Routes>
  );
}

export default App;
