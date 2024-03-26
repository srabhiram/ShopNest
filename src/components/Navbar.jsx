import { FaShopify, FaBars } from "react-icons/fa";
import { auth } from "../Authentication/Firebase";
import { useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Button } from "@radix-ui/themes";
import * as Avatar from "@radix-ui/react-avatar";
import CartPreview from "./CartPreview";
import { CatMob } from "./Categories/CategoryMob";

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
      <div className="z-50 flex w-full max-sm:justify-between px-1 md:justify-around bg-white/70 backdrop-blur-sm border rounded-sm items-center sticky top-0">
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

        <div className="flex gap-5 items-center justify-center border-white pr-2">
          <CartPreview />
          <div className="max-sm:hidden">
            <DropdownMenu.Root className=" w-full border-none border-white ">
              <DropdownMenu.Trigger>
                <div className="bg-gradient-to-r border-none border-white from-gray-100 to-gray-200 shadow-md rounded-full flex flex-col">
                  <Button variant="soft">
                    <Avatar.Root className="h-[40px] w-[40px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
                      <Avatar.Fallback className="leading-1 flex h-full w-full items-center justify-center  text-[18px] font-medium uppercase">
                        {username?.slice(0, 2)}
                      </Avatar.Fallback>
                    </Avatar.Root>
                  </Button>
                </div>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content className="bg-white px-1 py-2 mt-2  rounded-md border-0  cursor-default shadow-md">
                <DropdownMenu.Item
                  color="gray"
                  className="hover:bg-gray-50 px-2.5 text-base py-1.5 rounded-md"
                >
                  <strong> Hii {username} &#128075;</strong>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="hover:bg-gray-50 px-2.5 text-base py-1.5 rounded-md">
                  <p>Your Account</p>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="hover:bg-gray-50 px-2.5 text-base py-1.5 rounded-md">
                  <p>Help & Support</p>
                </DropdownMenu.Item>
                <DropdownMenu.Item
                  className="hover:text-red-600 px-2.5 te py-1.5 rounded-md"
                  onClick={() => {
                    signout();
                  }}
                >
                  <p> Signout</p>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </div>
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
            <ul className="mt-2 px-4   flex flex-col justify-center w-full">
              {/* Insert your sidebar items here */}
              <NavLink className=" border-b  py-3  w-full flex gap-5 items-center">
                <Avatar.Root className="h-[40px] w-[40px] select-none items-center justify-center overflow-hidden rounded-full align-middle bg-gray-200">
                  <Avatar.Fallback className="leading-1 flex h-full w-full items-center justify-center  text-[18px] font-medium uppercase">
                    {username?.slice(0, 2)}
                  </Avatar.Fallback>
                </Avatar.Root>
                <p className="font-medium text-lg"> {username}</p>
              </NavLink>
              <NavLink to="/home" className=" border-b  py-3  w-full">
                Home
              </NavLink>

              <NavLink to="" className=" border-b  py-3  w-full">
                <CatMob setOpen={setIsOpen} />
              </NavLink>

              <NavLink to="" className=" border-b  py-3  w-full">
                Your Account
              </NavLink>
              <NavLink to="" className=" border-b  py-3  w-full">
                About
              </NavLink>
              <NavLink  className=" border-b  py-3  w-full" onClick={() => {
                    signout();
                  }}>
               Signout
              </NavLink>
              {/* Add more items as needed */}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
