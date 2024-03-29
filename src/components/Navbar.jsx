import { FaShopify, FaBars } from "react-icons/fa";
import { auth } from "../Authentication/Firebase";
import { useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Button } from "@radix-ui/themes";
import * as Avatar from "@radix-ui/react-avatar";
import CartPreview from "./CartPreview";
import { CatMob } from "./Categories/CategoryMob";
import { IoSearch } from "react-icons/io5";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchSingleProduct, fetchCategory } from "../services/store/actions";

const Navbar = ({ scrollToAbout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const username = auth?.currentUser?.displayName;
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  // Function to fetch products from FakeStore API based on search query
  const fetchProducts = async (query) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();
      const filteredProducts = data.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      return filteredProducts;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  };

  // Function to handle search input change
  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
  };

  useEffect(() => {
    const search = async () => {
      if (searchQuery.trim() !== "") {
        const results = await fetchProducts(searchQuery);
        setSearchResults(results);
      } else {
        setSearchResults([]);
      }
    };

    // Delay search execution by 300ms after user stops typing
    const timeoutId = setTimeout(search, 300);

    // Clear timeout on component unmount or when searchQuery changes
    return () => clearTimeout(timeoutId);
  }, [searchQuery]);
  const ProductClick = (id, category) => {
    dispatch(fetchSingleProduct(id));
    dispatch(fetchCategory(category));
    navigate("/product");
    setSearchResults([]);
  };

  return (
    <>
      <div className="z-50 flex w-full max-sm:justify-between px-1 md:justify-around bg-sky-50/70 backdrop-blur-lg border rounded-sm items-center sticky top-0">
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
          <p className="font-Madimi font-medium text-lg">
            <NavLink to="/home">ShopNest</NavLink>
          </p>
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
                ? "border-b-2 py-1 border-black font-medium"
                : " py-1 border-black hover:border-b-2 hover:ease-in-out hover:duration-100 hover:transition-all active:border-b-2"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/category/all"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 py-1 border-black font-medium"
                : " py-1 border-black hover:border-b-2 hover:ease-in-out hover:duration-100 hover:transition-all active:border-b-2"
            }
          >
            Categories
          </NavLink>
          <NavLink
            to="/l"
            id="about"
            className={
              " py-1 border-black hover:border-b-2 hover:ease-in-out hover:duration-100 hover:transition-all active:border-b-2"
            }
            onClick={() => {
              scrollToAbout();
            }}
          >
            About
          </NavLink>
        </ul>

        <div className="flex gap-5 items-center justify-center border-white pr-2">
          <div className="flex flex-col">
            <div className="relative">
              <input
                type="search"
                name="search"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search Products"
                className="relative rounded-md w-48"
              />

              {searchQuery.trim() === "" && (
                <IoSearch
                  className="absolute top-3 right-3 fill-slate-400"
                  size={22}
                />
              )}
            </div>
            <div
              className={
                !searchResults.length > 0 || searchQuery.trim() === ""
                  ? "hidden"
                  : "bg-white absolute top-14 right-[12%] overflow-y-auto px-1 py-1 rounded-md border shadow-lg w-[20rem]  flex  text-sm max-sm:h-fit max-lg:h-fit"
              }
            >
              {searchResults.length > 0 && (
                <div className="mt-1 p-1 ">
                  <ul>
                    {searchResults.map(({ id, title, image, category }) => (
                      <>
                        <div className="flex items-center gap-1 my-3 w-[18rem]">
                          <img
                            src={image}
                            alt={title}
                            className="w-8 h-6 object-contain"
                          />
                          <li
                            key={id}
                            className="leading-6 font-medium truncate my-1 p-0 m-0 cursor-pointer  text-[16px]"
                            onClick={() => ProductClick(id, category)}
                          >
                            {title}
                          </li>
                        </div>
                      </>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
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
              <NavLink
                className=" border-b  py-3  w-full"
                onClick={() => {
                  signout();
                }}
              >
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
