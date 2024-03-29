import { About } from "./components/About";
import Navbar from "./components/Navbar";
import { Outlet, useNavigate } from "react-router-dom";

export default function Routes() {
  const navigate = useNavigate();

  // Function to scroll to the About section
  const scrollToAbout = () => {
    navigate('/about');
   
  };
  return (
    <>
      <Navbar scrollToAbout={scrollToAbout} />
      <Outlet />
      <About />
    </>
  );
}
