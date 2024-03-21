import { FaShopify, FaBars } from "react-icons/fa";
import { auth } from "../Authentication/Firebase";
import { useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Button } from "@radix-ui/themes";

import CartPreview from "./CartPreview";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const username = auth?.currentUser?.displayName;
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
      <div className="z-50 flex w-full justify-around bg-white/70 backdrop-blur-sm border rounded-sm items-center sticky top-0">
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
          <strong>
            <NavLink to="/home">Shopify!</NavLink>!
          </strong>
        </div>

        <ul
          className={`${
            isOpen ? "hidden" : "flex"
          } max-sm:hidden gap-4 items-center`}
        >
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 py-1 border-black"
                : " py-1 border-black hover:border-b-2 hover:ease-in-out hover:duration-100 hover:transition-all active:border-b-2"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/category"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 py-1 border-black"
                : " py-1 border-black hover:border-b-2 hover:ease-in-out hover:duration-100 hover:transition-all active:border-b-2"
            }
          >
            Categories
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 py-1 border-black"
                : " py-1 border-black hover:border-b-2 hover:ease-in-out hover:duration-100 hover:transition-all active:border-b-2"
            }
          >
            About
          </NavLink>
        </ul>

        <div className="flex gap-6 ">
          <CartPreview />
          <DropdownMenu.Root className=" w-full">
            <DropdownMenu.Trigger>
              <Button variant="soft">
                Hii! {username}
                <FaCaretDown />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="bg-white p-4 rounded-md border cursor-default shadow-md">
              <DropdownMenu.Item className="hover:bg-gray-500 hover:text-white px-2.5 text-sm py-1.5 rounded-md">
                Your Profile
              </DropdownMenu.Item>
              <DropdownMenu.Item
                className="hover:bg-red-500 hover:text-white px-2.5 text-sm py-1.5 rounded-md"
                onClick={() => {
                  signout();
                }}
              >
                Signout
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed top-15 left-0 w-full h-screen
           bg-slate-900/10 backdrop-blur-sm z-50"
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
