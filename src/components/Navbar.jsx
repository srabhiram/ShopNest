import { FaShopify, FaBars } from "react-icons/fa";
import { auth } from "../Authentication/Firebase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const username = auth.currentUser.displayName;
  const navigate = useNavigate();

  const signout = () => {
    auth
      .signOut()
      .then(() => {
        console.log("User signed out successfully");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <>
      <div className="z-0 flex w-full justify-between bg-white/70 backdrop-blur-sm border rounded-sm items-center sticky top-0">
        <div
          id="icon"
          className="p-2 flex items-center gap-2 max-lg-text-2xl cursor-pointer"
        >
          <FaBars
            className="lg:hidden space-x-2 cursor-pointer"
            size={30}
            onClick={() => setIsOpen(!isOpen)}
          />
          <FaShopify size={44} />
          <strong>Shopify!</strong>
        </div>

        <ul
          className={`${
            isOpen ? "hidden" : "flex"
          } max-sm:hidden gap-4 items-center`}
        >
          <li>Home</li>
          <li>Products</li>
          <li>Other</li>
        </ul>

        <div className="flex mx-2">
          <button
            onClick={() => {
              signout();
            }}
            className="bg-black px-3 py-2 m-2 rounded-lg text-white ease-in-out hover:scale-110"
          >
            Hii! {username}
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed top-15 left-0 w-full h-screen
           bg-slate-900/10 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div
            id="sidebar"
            className="flex flex-col items-start space-y-8  h-screen w-2/3 bg-white overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the sidebar itself
          >
            <ul className="mt-8 ml-4">
              {/* Insert your sidebar items here */}
              <li>Home</li>
              <li>Products</li>
              <li>Other</li>
              <li>More</li>
              {/* Add more items as needed */}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
